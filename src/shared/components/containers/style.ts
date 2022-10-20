import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    const { spacing, palette } = theme;
    return {
        appContainer: {
            minHeight: '100vh',
        },
        mainPartContainer: {
            flex: '1 1 auto',
            marginTop: spacing(10),
            marginBottom: spacing(3),
            gap: spacing(2),
            '@media (max-width:600px)': {
                marginTop: spacing(14),
            },
        },
        mainPartContainerHomePage: {
            marginTop: spacing(10),
            marginBottom: spacing(3),
            justifyContent: 'center',
        },
        cardContainer: {
            marginBottom: spacing(3),
        },
        cityDataContainer: {
            minWidth: 275,
            textAlign: 'center',
        },
        cityDataButtonsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        detailedCardContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: '150px',
            '@media (max-width:600px)': {
                maxWidth: '100%',
                borderBottom: '1px solid ',
                borderBottomColor: palette.secondary.main,
            },
        },
        detailedCityDataContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            minWidth: 275,
            textAlign: 'center',
            gap: spacing(1),
            '@media (max-width:600px)': {
                flexDirection: 'column',
                gap: spacing(0.5),
            },
        },
    };
});
