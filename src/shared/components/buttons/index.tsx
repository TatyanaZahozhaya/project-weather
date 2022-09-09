import { FC, memo } from 'react';

import { Button, ToggleButton, Tooltip, Fade } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { Paths } from '@shared';


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

export const CityDataButton: FC<ICityDataButton> = memo(({ title, link, ariaLabel }) => {
    return (
        <Button
            size="small"
            component="a"
            sx={{
                color: 'secondary.main',
            }}
            href={link}
            aria-label={ariaLabel}>
            {title}
        </Button>
    );
});

export const ToListButton = () => {
    return (
        <CityDataButton title="To list" ariaLabel='To list button' link={Paths.RESPONSE_LIST}/>
    )
}
export const ToForecastButton = () => {
    return (
        <CityDataButton title="Forecast for 5 days" ariaLabel='Forecast for 5 days button' link={Paths.FORECAST_SEVERAL_DAYS}/>
    )
}
export const ToFDetailesButton = () => {
    return (
        <CityDataButton title="Current data" ariaLabel='Current data button' link={Paths.DETAILED_DATA}/>
    )
}