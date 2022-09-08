import { FC, memo } from 'react';

import { TableCell, TableRow } from '@mui/material';

import { getLocalHoursMinutes, SharedComponents } from '@shared';

interface IForecastTableRow {
    dt: number;
    temp: number;
    icon: string;
    timezone: number;
}

export const ForecastTableRow: FC<IForecastTableRow> = memo(({ dt, temp, icon, timezone }) => {
    return (
        <TableRow>
            <TableCell>{`${getLocalHoursMinutes(dt, timezone)}`}</TableCell>
            <TableCell align="right">{`${temp} °C`}</TableCell>
            <TableCell align="right">
                <SharedComponents.WeatherIcon icon={icon} />{' '}
            </TableCell>
        </TableRow>
    );
});
