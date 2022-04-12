import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  styled,
  ToggleButtonGroup,
} from "@mui/material"

export const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.6),
  textAlign: "center",
  border: "0.13rem solid transparent",
  borderRadius: "5px",
}))

export const ItemHover = styled(Item, {
  shouldForwardProp: (prop) =>
    prop !== "isDateSelected" && prop !== "isDateBefore",
})<{
  isDateSelected: string
  isDateBefore: string
}>(({ theme, isDateSelected, isDateBefore }) => ({
  backgroundColor:
    isDateSelected === "true"
      ? theme.palette.text.secondary
      : isDateBefore === "true"
      ? theme.palette.grey.A100
      : "",
  color:
    isDateSelected === "true"
      ? "white"
      : isDateBefore === "true"
      ? theme.palette.grey.A400
      : "",
  cursor: isDateBefore === "true" ? "not-allowed" : "",
  ":hover": {
    backgroundColor:
      isDateBefore === "true" ? "" : theme.palette.secondary.main,
    border:
      isDateBefore === "true"
        ? ""
        : "0.13rem solid " + theme.palette.primary.light,
    color: isDateBefore === "true" ? "" : "initial",
  },
}))

export const TimeItem = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.6),
  textAlign: "center",
  border: "0.12rem solid " + theme.palette.text.secondary,
  borderRadius: "5px",
  color: theme.palette.text.secondary,
  width: "100%",
  ":hover": {
    backgroundColor: theme.palette.secondary.main,
    border: "0.12rem solid " + theme.palette.primary.light,
  },
  ":focus": {
    backgroundColor: theme.palette.text.secondary,
    border: "0.12rem solid " + theme.palette.primary.light,
    color: "white",
  },
  "&.Mui-disabled": {
    cursor: "not-allowed",
    pointerEvents: "auto",
    backgroundColor: theme.palette.grey.A100,
  },
}))

export const SlotPickerDialogWrapper = styled(Dialog)(({ theme }) => ({
  maxWidth: "450px",
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}))

export const SlotPickerDateHeader = styled(Stack)({
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  flexDirection: "row",
})

export const IconButtonArrows = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
}))

export const SlotPickerDialogContentWrapper = styled(DialogContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
})

export const ToggleButtonGroupStyled = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    "& .Mui-selected": {
      backgroundColor: theme.palette.text.secondary,
      color: "white",
    },
    "& .MuiToggleButton-root": {
      padding: "7px 15px",
      borderColor: theme.palette.text.secondary,
      ":hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  }),
)
