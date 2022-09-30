import { FC, memo } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IText {
    text: string;
}
export const TitleHomePage: FC<IText> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Typography
            variant="h2"
            component="h1"
            sx={{
                mb: `${spacing(4)}`,
                '@media (max-width:600px)': {
                    fontSize: '2.5rem',
                },
            }}>
            {text}
        </Typography>
    );
});

export const CityCardNameText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="h4"
            component="div">
            {text}
        </Typography>
    );
});

export const CityCardMainText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="h5"
            component="div">
            {text}
        </Typography>
    );
});

export const CityCardTitleText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            variant="subtitle1"
            component="div">
            {text}
        </Typography>
    );
});

export const CityCardSecondaryText: FC<IText> = memo(({ text }) => {
    return (
        <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary">
            {text}
        </Typography>
    );
});
