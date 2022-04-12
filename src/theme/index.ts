import { createTheme } from "@mui/material/styles"

export const peepTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "32px",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            color: "#52617B",
            ":hover": {
              backgroundColor: "#E2EFFF",
            },
            ":focus": {
              backgroundColor: "#4048D6",
              color: "white",
            },
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minWidth: "32px",
        },
      },
    },
    // MuiGrid: {
    //   "& > MuiGrid-item": {
    //     paddingLeft: "0px",
    //   },
    // },
  },
  palette: {
    primary: {
      light: "#757CE2",
      main: "#4048D6",
      dark: "#4048D6",
    },
    secondary: {
      main: "#E2EFFF",
      dark: "#757CE2",
    },

    text: {
      primary: "#52617B",
      secondary: "#4048D6",
    },
  },
})
