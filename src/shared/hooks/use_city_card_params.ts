import { SharedTypes, getLocalTime } from '@shared';

export const useCityCardParams = (data: SharedTypes.ICityDataOutput): Array<string> => {
    const { name, sys, weather, main, dt, timezone } = data;

    const country = sys && sys.country ? sys.country : '-';
    const date = getLocalTime(dt, timezone);
    const temp = `${main && main.temp ? main.temp : '-'}`;
    const fellsLike = `${main && main.feels_like ? main.feels_like : '-'}`;
    const icon = `${weather && weather.length ? weather[0].icon : '03d'}`;
    const description = weather && weather.length ? weather[0].description : '-';
    return [name, country, date, temp, fellsLike, icon, description];
};
