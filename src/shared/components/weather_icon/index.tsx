import { FC, memo } from 'react';
import { Avatar, Tooltip } from '@mui/material';
import { useStyles } from './style';

interface IWeatherIcon {
    icon: string;
    title: string;
}

export const WeatherIcon: FC<IWeatherIcon> = memo(({ icon, title }) => {
    const { classes } = useStyles();

    return (
        <Tooltip
            title={title}
            arrow>
            <Avatar
                variant="rounded"
                alt="Weather icon"
                className={classes.avatar}
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            />
        </Tooltip>
    );
});
