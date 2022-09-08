import { createTheme } from '@mui/material/styles';

export const dark = createTheme({
    palette: {
        primary: {
            main: '#1f5f6c',
        },
        secondary: {
            main: '#cd623e',
        },
        text: {
            primary: '#fbf4f4',
        },
        background: {
            default: '#373737',
            paper: '#a09e9e',
        },
    },
});
