import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const { spacing, palette } = theme;
    return {
        warningMessageCard: {
            minWidth: 275,
            textAlign: 'center',
            padding: spacing(2),
        },
        warningMessageText: {
            color: palette.warning.dark,
        },
    };
});
