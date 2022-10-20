import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Box, ToggleButton, Tooltip, Fade } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

import { Paths, SharedTypes } from '@shared';
import { useStyles } from './style';

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
    const { classes } = useStyles();
    return (
        <Tooltip
            title={title}
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}>
            <ToggleButton
                className={classes.toggleButton}
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
    const { classes } = useStyles();
    return (
        <Box className={classes.boxCityDataButton}>
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
