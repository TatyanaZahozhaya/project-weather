import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const { spacing, palette } = theme;
    return {
        toggleButton: {
            justifySelf: 'right',
            display: 'flex',
            color: 'inherit',
            borderRadius: '50%',
            width: spacing(6),
            '@media (max-width:600px)': {
                gridArea: '1/2/2/3',
                width: spacing(4),
                height: spacing(4),
            },
        },
        boxCityDataButton: {
            display: 'inline-block',
            padding: spacing(0.6),
            margin: spacing(0.7),
            borderRadius: spacing(0.5),
            color: 'inherit',
            fontSize: '14px',
            backgroundColor: palette.secondary.light,
            '&:hover': {
                backgroundColor: palette.secondary.main,
            },
        },
    };
});
