import { FC, memo } from 'react';

import { Button, ToggleButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

interface IThemeButton {
    onClick(e: React.MouseEvent): void;
    ariaLabel: string;
    value: string | undefined;
}

interface ICityDataButton {
    title: string;
    link: string;
}

export const ThemeButton: FC<IThemeButton> = memo(({ onClick, ariaLabel, value }) => {
    const { spacing } = useTheme();
    return (
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
            value={value}
            onClick={onClick}>
            <LightModeIcon />
            <DarkModeIcon />
        </ToggleButton>
    );
});

export const CityDataButton: FC<ICityDataButton> = memo(({ title, link }) => {
    return (
        <Button
            size="small"
            component="a"
            sx={{
                color: 'secondary.main',
            }}
            href={link}>
            {title}
        </Button>
    );
});
