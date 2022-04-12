import { Divider } from "@mui/material"
import React, { Dispatch, SetStateAction } from "react"
import { TimeOfDayEnum } from "./utils"
import SlotPickerTime from "./SlotPickerTime"
import SlotPickerDate from "./SlotPickerDate"
import { SlotPickerDialogContentWrapper } from "./styled"

interface SlotPickerDialogContentProps {
  now: Date
  selectedDate: Date | null
  days: Array<Date>
  timeOfDayOrdered: Record<TimeOfDayEnum, Array<Date>>
  setSelectedDate: Dispatch<SetStateAction<Date | null>>
  setSelectedDateTime: Dispatch<SetStateAction<Date | null>>
}

const SlotPickerDialogContent = ({
  now,
  selectedDate,
  days,
  timeOfDayOrdered,
  setSelectedDate,
  setSelectedDateTime,
}: SlotPickerDialogContentProps) => {
  return (
    <SlotPickerDialogContentWrapper>
      <SlotPickerDate
        setSelectedDate={setSelectedDate}
        now={now}
        selectedDate={selectedDate}
        days={days}
      />

      <Divider flexItem />

      <SlotPickerTime
        setSelectedDateTime={setSelectedDateTime}
        timeOfDayOrdered={timeOfDayOrdered}
        now={now}
      />
    </SlotPickerDialogContentWrapper>
  )
}

export default SlotPickerDialogContent
