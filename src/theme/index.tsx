import { createTheme } from "@mui/material/styles"
import { colors } from "@mui/material"

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: "#F4F6F8",
    },
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3EA6FA",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    }
  },
})

export default theme