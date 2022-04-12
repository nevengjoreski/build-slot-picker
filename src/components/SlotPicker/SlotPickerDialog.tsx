import { Button, DialogActions } from "@mui/material"
import { SlotPickerDialogWrapper } from "./styled"
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"
import SlotPickerTitle from "./SlotPickerTitle"
import {
  addDays,
  addMinutes,
  eachDayOfInterval,
  eachMinuteOfInterval,
  isAfter,
  startOfWeek,
} from "date-fns"
import { orderTimeArray, TimeOfDayEnum, WeekStartsEnum } from "./utils"
import SlotPickerDialogContent from "./SlotPickerDialogContent"

interface SlotPickerProps {
  open: boolean
  handleClickClose: () => void
  displaySelectedValue: () => void
  setSelectedDateTime: Dispatch<SetStateAction<Date | null>>
}

const SlotPickerDialog = ({
  open,
  handleClickClose,
  displaySelectedValue,
  setSelectedDateTime,
}: SlotPickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  //you can simulate hours before or after for checking
  const hour = 1000 * 60 * 60
  const [now] = useState<Date>(new Date(Date.now() - hour * 1))

  useEffect(() => {
    //if past 7:15 pm select tomorrow as date
    if (isAfter(now, time.at(-1) || now)) {
      const newDate = addDays(now, 1)
      newDate.setHours(7)
      setSelectedDate(newDate)
    }
  }, [selectedDate])

  // get start of this week
  const startOfBootWeek = startOfWeek(now, {
    weekStartsOn: WeekStartsEnum.Sunday,
  })

  //get days of current and next week
  const days = eachDayOfInterval({
    start: startOfBootWeek,
    end: addDays(startOfBootWeek, 13),
  })

  // this is needed for creating the 15 minute interval date from
  // start till end of the day
  const tmpSelectedDate = new Date(selectedDate || now)
  tmpSelectedDate.setHours(8)
  tmpSelectedDate.setMinutes(0)

  // creating datetime array of 15 minute interval from 8 to 17:45
  const time = useMemo(() => {
    return eachMinuteOfInterval(
      {
        start: tmpSelectedDate,
        end: addMinutes(tmpSelectedDate, 11 * 60 + 45), //11h 45min
      },
      { step: 15 },
    )
  }, [tmpSelectedDate, selectedDate])

  // set the appropriate order for the display
  const timeOfDayOrdered = useMemo<Record<TimeOfDayEnum, Array<Date>>>(
    () => ({
      morning: orderTimeArray(time.slice(0, 16)),
      afternoon: orderTimeArray(time.slice(16, 32)),
      evening: orderTimeArray(time.slice(32)),
    }),
    [time],
  )

  return (
    <SlotPickerDialogWrapper
      onClose={handleClickClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <SlotPickerTitle id="customized-dialog-title" onClose={handleClickClose}>
        Pick date and time
      </SlotPickerTitle>

      <SlotPickerDialogContent
        now={now}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        days={days}
        timeOfDayOrdered={timeOfDayOrdered}
        setSelectedDateTime={setSelectedDateTime}
      />

      <DialogActions>
        <Button variant={"contained"} fullWidth onClick={displaySelectedValue}>
          APPLY
        </Button>
      </DialogActions>
    </SlotPickerDialogWrapper>
  )
}

export default SlotPickerDialog
