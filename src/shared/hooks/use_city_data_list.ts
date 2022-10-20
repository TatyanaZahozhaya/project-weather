import { SharedTypes } from '@shared';

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
