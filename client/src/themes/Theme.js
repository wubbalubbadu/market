import { createTheme ,ThemeProvider } from "@material-ui/core/styles";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#ab003c",
            light:"skyblue"
        },
        secondary:{
            main: "#2a3eb1"
        },
        otherColor:{
            main: "#ffee33"
        }
    }
})