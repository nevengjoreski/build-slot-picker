import React, { Dispatch, SetStateAction, useCallback, useMemo } from "react"
import { Box, Grid, Typography } from "@mui/material"
import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowDown,
} from "@mui/icons-material"
import {
  IconButtonArrows,
  Item,
  ItemHover,
  SlotPickerDateHeader,
} from "./styled"
import { isBefore } from "date-fns"

interface SlotPickerDateProps {
  days: Array<Date>
  now: Date
  selectedDate: Date | null
  setSelectedDate: Dispatch<SetStateAction<Date | null>>
}

const SlotPickerDate = ({
  days,
  now,
  selectedDate,
  setSelectedDate,
}: SlotPickerDateProps) => {
  const date = selectedDate || now
  const displayDate = useMemo(() => {
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }, [date])

  const getWeekDayShort = useCallback(
    (day) =>
      day
        .toLocaleString("en-US", {
          weekday: "short",
        })
        .toUpperCase(),
    [],
  )

  // selecting a date, not allowed for dates in the past
  const handleDateSelection = (day: Date) => {
    if (!isBefore(day.getDate(), now.getDate())) {
      setSelectedDate(day)
    }
  }

  const DaysOfWeekNames = () => {
    return (
      <>
        {days.slice(0, 7).map((day) => (
          <Grid item xs={1.7} key={day.getTime()}>
            <Item>{getWeekDayShort(day)}</Item>
          </Grid>
        ))}
      </>
    )
  }

  // component handles display and selection of dates
  // css handles disable and hover effects on ItemHover
  const DaysOfWeekData = () => {
    return (
      <>
        {days.map((day) => (
          <Grid item xs={1.7} key={day.getTime()}>
            <ItemHover
              onClick={() => handleDateSelection(day)}
              isDateSelected={(day.getDate() === date.getDate()).toString()}
              isDateBefore={isBefore(day.getDate(), now.getDate()).toString()}
            >
              {day.getDate()}
            </ItemHover>
          </Grid>
        ))}
      </>
    )
  }

  return (
    <>
      <SlotPickerDateHeader>
        <IconButtonArrows aria-label="Back" size="small">
          <ArrowBackIos sx={{ pl: "4px" }} fontSize={"small"} />
        </IconButtonArrows>

        <Box sx={{ display: "flex" }}>
          <Typography gutterBottom>{displayDate}</Typography>
          <KeyboardArrowDown
            sx={{ ml: "10px" }}
            fontSize={"medium"}
            color={"primary"}
          />
        </Box>

        <IconButtonArrows aria-label="Forward" size="small">
          <ArrowForwardIos sx={{ px: "2px" }} fontSize={"small"} />
        </IconButtonArrows>
      </SlotPickerDateHeader>

      <Grid container>
        <DaysOfWeekNames />
        <DaysOfWeekData />
      </Grid>
    </>
  )
}

export default SlotPickerDate
