import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    return {
        inputSearchField: {
            backgroundColor: 'white',
        },
        formSearchField: {
            display: 'flex',
            justifyContent: 'center',
            '@media (max-width:600px)': {
                gridArea: '2/1/3/3',
            },
        },
    };
});
