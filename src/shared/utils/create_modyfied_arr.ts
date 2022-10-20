import { SharedTypes } from '@shared';
import { getLocalDate } from './index';

export const createModyfiedArr = (
    arr: Array<SharedTypes.IForecastListItem>,
    timezone: number,
    dateForFilter: number,
): Array<SharedTypes.IForecastListItem>[] => {
    let modyfiedArr = [];
    for (let i = 0; i < 5; i++) {
        modyfiedArr[i] = arr.filter((item) => {
            const x = +getLocalDate(item.dt, timezone);
            return x === +getLocalDate(dateForFilter + 24*60*60*i, timezone);
        });
    }
    return modyfiedArr;
};