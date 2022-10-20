import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const { palette } = theme;

    return {
        listElement: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: palette.background.paper,
        },
    };
});
