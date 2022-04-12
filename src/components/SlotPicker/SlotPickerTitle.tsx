import { DialogTitle, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"

export interface SlotPickerTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const SlotPickerTitle = (props: SlotPickerTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[900],
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default SlotPickerTitle
