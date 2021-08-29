import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#FFF",
      light: "#fafafa",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
