import { FC, memo } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Card, CardActions, CardContent, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import { useStyles } from './style';

export const GrigContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
});

const FlexBoxSB = styled(Box)<BoxProps>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const FlexBoxC = styled(Box)<BoxProps>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

interface IAppContainer {
    children?: React.ReactNode;
}
export const AppContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return <FlexBoxSB className={classes.appContainer}>{children}</FlexBoxSB>;
});

export const MainPartContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <FlexBoxC
            component="main"
            className={classes.mainPartContainer}>
            {children}
        </FlexBoxC>
    );
});

export const MainPartContainerHomePage: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <Grow
            in={true}
            {...{ timeout: 1000 }}>
            <FlexBoxC
                component="main"
                className={classes.mainPartContainerHomePage}>
                {children}
            </FlexBoxC>
        </Grow>
    );
});

export const CardContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <FlexBoxC
            className={classes.cardContainer}>
            {children}
        </FlexBoxC>
    );
});

export const CityDataContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <Card className={classes.cityDataContainer}>{children}</Card>
        </Grow>
    );
});

export const CityDataButtonsContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <CardActions
            className={classes.cityDataButtonsContainer}>
            {children}
        </CardActions>
    );
});

export const DetailedCardContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <CardContent
            className={classes.detailedCardContainer}>
            {children}
        </CardContent>
    );
});

export const DetailedCityDataContainer: FC<IAppContainer> = memo(({ children }) => {
    const { classes } = useStyles();

    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <Card
                className={classes.detailedCityDataContainer}>
                {children}
            </Card>
        </Grow>
    );
});
