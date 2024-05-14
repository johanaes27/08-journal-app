import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#9c5252'
        },
        secondary: {
            main: '#771a1a'
        },
        error: {
            main: red.A400
        }
    }
})