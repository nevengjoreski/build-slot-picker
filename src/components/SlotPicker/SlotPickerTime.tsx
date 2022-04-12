import React, {Dispatch, SetStateAction, useState} from "react"
import {Grid, ToggleButton} from "@mui/material"
import {Flare, NightsStay, WbSunny} from "@mui/icons-material"
import {TimeItem, ToggleButtonGroupStyled} from "./styled"
import {format, isBefore} from "date-fns"
import {getTimeOfDay, TimeOfDayEnum} from "./utils"

interface SlotPickerTimeProps {
  timeOfDayOrdered: Record<TimeOfDayEnum, Array<Date>>
  now: Date
  setSelectedDateTime: Dispatch<SetStateAction<Date | null>>
}

const SlotPickerTime = ({
  timeOfDayOrdered,
  now,
  setSelectedDateTime,
}: SlotPickerTimeProps) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDayEnum>(getTimeOfDay(now))

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    timeOfDay: TimeOfDayEnum,
  ) => {
    // not executing when self click
    timeOfDay && setTimeOfDay(timeOfDay)
  }

  const handleTimePick = (day: Date) => {
    setSelectedDateTime(day)
  }

  return (
    <>
      <ToggleButtonGroupStyled
        exclusive
        value={timeOfDay}
        onChange={handleChange}
      >
        <ToggleButton value="morning">
          <Flare /> Morning
        </ToggleButton>
        <ToggleButton value="afternoon">
          <WbSunny /> Afternoon
        </ToggleButton>
        <ToggleButton value="evening">
          <NightsStay /> Evening
        </ToggleButton>
      </ToggleButtonGroupStyled>

      {/*the time component that is disabled for dates in the past*/}
      <Grid container spacing={1.2}>
        {timeOfDayOrdered[timeOfDay].map((day) => (
          <Grid item xs={3} key={day.getTime()}>
            <TimeItem
              onClick={() => handleTimePick(day)}
              disabled={isBefore(day, now)}
            >
              {format(day, "h:mm aaa")}
            </TimeItem>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default SlotPickerTime
