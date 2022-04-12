import React, { useState } from "react"
import { Box, Button } from "@mui/material"
import SlotPickerDialog from "./SlotPickerDialog"
import { format } from "date-fns"

const SlotPicker = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [display, setDisplay] = useState<boolean>(false)
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
  const displayFormat = "EEEE,MMMM do, yyyy hh:mm a"

  const handleClickOpen = () => {
    setDisplay(false)
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
  }

  //display the value of the picker
  const displaySelectedValue = () => {
    setDisplay(true)
    setOpen(false)
  }

  return (
    <>
      {display && selectedDateTime && (
        <Box>{format(selectedDateTime, displayFormat)}</Box>
      )}
      <Button variant="outlined" onClick={handleClickOpen}>
        Pick date and time
      </Button>
      {open && (
        <SlotPickerDialog
          open={open}
          handleClickClose={handleClickClose}
          displaySelectedValue={displaySelectedValue}
          setSelectedDateTime={setSelectedDateTime}
        />
      )}
    </>
  )
}

export default SlotPicker
