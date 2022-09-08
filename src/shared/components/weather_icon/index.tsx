import { FC, memo } from 'react';

import { Avatar } from '@mui/material';

interface IWeatherIcon {
    icon: string;
}

export const WeatherIcon: FC<IWeatherIcon> = memo(({ icon }) => {
    return (
        <Avatar
            variant="rounded"
            alt="Weather icon"
            sx={{
                display: 'grid',
                justifySelf: 'center',
                backgroundColor: 'primary.light',
            }}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
    );
});
