import { SharedTypes, createModyfiedArr } from '@shared';

export const useFilteredForecastList = (
    cityForecast: SharedTypes.ICityForecastOutput,
    timezone: number,
): Array<SharedTypes.IForecastListItem[]> => {
    const dateForFilter = cityForecast && cityForecast.list.length ? cityForecast.list[0].dt : 0;

    return createModyfiedArr(cityForecast.list, timezone, dateForFilter);
};
