import { FC, memo } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { Card, CardActions, CardContent, Grow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

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
    return (
        <FlexBoxSB
            sx={{
                minHeight: '100vh',
            }}>
            {children}
        </FlexBoxSB>
    );
});

export const MainPartContainer: FC<IAppContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <FlexBoxC
            component="main"
            sx={{
                flex: '1 1 auto',
                mt: `${spacing(10)}`,
                mb: `${spacing(3)}`,
                gap: `${spacing(2)}`,
                '@media (max-width:600px)': {
                    mt: `${spacing(12)}`,
                },
            }}>
            {children}
        </FlexBoxC>
    );
});

export const MainPartContainerHomePage: FC<IAppContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Grow
            in={true}
            {...{ timeout: 1000 }}>
            <FlexBoxC
                component="main"
                sx={{
                    mt: `${spacing(10)}`,
                    mb: `${spacing(3)}`,
                    justifyContent: 'center',
                }}>
                {children}
            </FlexBoxC>
        </Grow>
    );
});

export const CardContainer: FC<IAppContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <FlexBoxC
            sx={{
                mt: `${spacing(3)}`,
                mb: `${spacing(3)}`,
            }}>
            {children}
        </FlexBoxC>
    );
});

export const CityDataContainer: FC<IAppContainer> = memo(({ children }) => {
    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <Card sx={{ minWidth: 275, textAlign: 'center' }}>{children}</Card>
        </Grow>
    );
});

export const CityDataButtonsContainer: FC<IAppContainer> = memo(({ children }) => {
    return (
        <CardActions
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
            {children}
        </CardActions>
    );
});

export const DetailedCardContainer: FC<IAppContainer> = memo(({ children }) => {
    return (
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: '150px',
                '@media (max-width:600px)': {
                    maxWidth: '100%',
                    borderBottom: '1px solid ',
                    borderBottomColor: 'secondary.main',
                },
            }}>
            {children}
        </CardContent>
    );
});

export const DetailedCityDataContainer: FC<IAppContainer> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <Card
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    minWidth: 275,
                    textAlign: 'center',
                    gap: `${spacing(1)}`,
                    '@media (max-width:600px)': {
                        flexDirection: 'column',
                        gap: `${spacing(0.5)}`,
                    },
                }}>
                {children}
            </Card>
        </Grow>
    );
});
