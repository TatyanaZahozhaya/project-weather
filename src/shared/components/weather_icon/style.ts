import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const { palette } = theme;

    return {
        avatar: {
            display: 'grid',
            justifySelf: 'center',
            backgroundColor: palette.primary.light,
        },
    };
});
