import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Box, ToggleButton, Tooltip, Fade } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

import { Paths, SharedTypes } from '@shared';

interface IThemeButton {
    onClick(e: React.MouseEvent): void;
    ariaLabel: string;
    title: string;
    value?: string;
}

interface ICityDataButton {
    title: string;
    link: string;
    ariaLabel: string;
}

export const ThemeButton: FC<IThemeButton> = memo(({ onClick, ariaLabel, value, title }) => {
    const { spacing } = useTheme();
    return (
        <Tooltip
            title={title}
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}>
            <ToggleButton
                sx={{
                    justifySelf: 'right',
                    display: 'flex',
                    color: 'inherit',
                    borderRadius: '50%',
                    width: `${spacing(6)}`,
                    '@media (max-width:600px)': {
                        gridArea: '1/2/2/3',
                        width: `${spacing(4)}`,
                        height: `${spacing(4)}`,
                    },
                }}
                aria-label={ariaLabel}
                value={value ? value : ''}
                onClick={onClick}>
                <LightModeIcon />
                <DarkModeIcon />
            </ToggleButton>
        </Tooltip>
    );
});

const ButtonStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
export const CityDataButton: FC<ICityDataButton> = memo(({ title, link, ariaLabel }) => {
    const { palette, spacing } = useTheme();
    return (
        <Box
            sx={{
                display: 'inline-block',
                padding: `${spacing(0.6)}`,
                margin: `${spacing(0.7)}`,
                borderRadius: `${spacing(0.5)}`,
                color: 'inherit',
                fontSize: '14px',
                backgroundColor: palette.secondary.light,
                '&:hover': {
                    backgroundColor: palette.secondary.main,
                },
            }}>
            <ButtonStyled
                to={link}
                aria-label={ariaLabel}>
                {title}
            </ButtonStyled>
        </Box>
    );
});

export const ToListButton: FC<SharedTypes.IResponseName> = ({ name }) => {
    return (
        <CityDataButton
            title="To list"
            ariaLabel="To list button"
            link={`${Paths.RESPONSE_LIST}/${name}`}
        />
    );
};
export const ToForecastButton: FC<SharedTypes.IDataSection> = ({ id }) => {
    return (
        <CityDataButton
            title="Forecast for 5 days"
            ariaLabel="Forecast for 5 days button"
            link={`${Paths.FORECAST_SEVERAL_DAYS}/${id}`}
        />
    );
};
export const ToFDetailesButton: FC<SharedTypes.IDataSection> = ({ id }) => {
    return (
        <CityDataButton
            title="Current data"
            ariaLabel="Current data button"
            link={`${Paths.DETAILED_DATA}/${id}`}
        />
    );
};

export const ToHomePageButton = () => {
    return (
        <CityDataButton
            title="HOME"
            ariaLabel="Link to home page"
            link={Paths.HOME}
        />
    );
};
