import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    return {
        toolbarHeader: {
            justifyContent: 'right',
        },
        toolbarHeaderWithSearchField: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            justifyContent: 'space-between',
            gap: `${theme.spacing(2)}`,
            '@media (max-width:600px)': {
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '0.5fr 1fr',
                gap: '0',
                padding: `${theme.spacing(1)}`,
            },
        },
        appBarFooter: {
            top: 'auto',
            bottom: 0,
        },
    };
});
