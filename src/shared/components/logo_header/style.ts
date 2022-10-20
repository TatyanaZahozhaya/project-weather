import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    return {
        logoHeader: {
            textDecoration: 'none',
            color: 'inherit',
            '@media (max-width:600px)': {
                gridArea: '1/1/2/2',
            },
        },
    };
});
