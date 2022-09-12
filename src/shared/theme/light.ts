import { createTheme } from '@mui/material/styles';

export const light = createTheme({
    palette: {
        primary: {
            main: '#1f5f6c',
            light: '#56939e'
        },
        secondary: {
            main: '#cd623e',
            light: 'rgba(205, 98, 62, 0.7)',
        },
        background: {
            paper: '#e2f6fe',
        },
    },
});
