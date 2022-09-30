import { useMemo } from 'react';
import { createModyfiedArr, getLocalTime, SharedTypes } from '@shared';

export const useCityDataList = (
    data: SharedTypes.ICityDataOutput,
): Array<SharedTypes.ICityDataParams> => {
    const { main, wind, clouds } = data;

    return [
        {
            param: 'Atmospheric pressure,',
            measure: 'hPa',
            value: `${main && main.pressure ? main.pressure : '-'}`,
        },
        {
            param: 'Humidity,',
            measure: '%',
            value: `${main && main.humidity ? main.humidity : '-'}`,
        },
        {
            param: 'Cloudiness,',
            measure: '%',
            value: `${clouds && clouds.all ? clouds.all : '-'}`,
        },
        {
            param: 'Wind speed,',
            measure: 'meter/sec',
            value: `${wind && wind.speed ? wind.speed : '-'} `,
        },
        {
            param: 'Wind gust,',
            measure: 'meter/sec',
            value: `${wind && wind.gust ? wind.gust : '-'}`,
        },
    ];
};

export const useCityCardParams = (data: SharedTypes.ICityDataOutput): Array<string> => {
    const { name, sys, weather, main, dt, timezone } = data;

    const country = useMemo(() => (sys && sys.country ? sys.country : '-'), [sys]);
    const date = useMemo(() => getLocalTime(dt, timezone), [dt, timezone]);
    const temp = useMemo(() => `${main && main.temp ? main.temp : '-'}`, [main]);
    const fellsLike = useMemo(() => `${main && main.feels_like ? main.feels_like : '-'}`, [main]);
    const icon = `${weather && weather.length ? weather[0].icon : '03d'}`;
    const description = useMemo(
        () => (weather && weather.length ? weather[0].description : '-'),
        [weather],
    );

    return [name, country, date, temp, fellsLike, icon, description];
};

export const useFilteredForecastList = (
    cityForecast: SharedTypes.ICityForecastOutput,
    timezone: number,
): Array<SharedTypes.IForecastListItem[]> => {
    const dateForFilter = cityForecast && cityForecast.list.length ? cityForecast.list[0].dt : 0;

    return createModyfiedArr(cityForecast.list, timezone, dateForFilter);
};
