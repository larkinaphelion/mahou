import { createMuiTheme, Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

// define dark theme colors
export const darkTheme: Theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: grey[300],
        },
        secondary: {
            main: green[800],
        },
    },
});