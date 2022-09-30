import { FC, memo } from 'react';
import { Avatar, Tooltip } from '@mui/material';

interface IWeatherIcon {
    icon: string;
    title: string;
}

export const WeatherIcon: FC<IWeatherIcon> = memo(({ icon, title }) => {
    return (
        <Tooltip
            title={title}
            arrow>
            <Avatar
                variant="rounded"
                alt="Weather icon"
                sx={{
                    display: 'grid',
                    justifySelf: 'center',
                    backgroundColor: 'primary.light',
                }}
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            />
        </Tooltip>
    );
});
