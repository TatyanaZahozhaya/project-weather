import { SharedTypes } from '@shared';

export const getLocalTime = (a: any, b: any) => {
    return new Date((a + b) * 1000).toUTCString().slice(5, -7);
};

export const getLocalDate = (a: any, b: any) => {
    return new Date((a + b) * 1000).toUTCString().slice(5, 8);
};
export const getLocalDay = (a: any, b: any) => {
    return new Date((a + b) * 1000).toUTCString().slice(5, 16);
};

export const getLocalHoursMinutes = (a: any, b: any) => {
    return new Date((a + b) * 1000).toUTCString().slice(17, -7);
};

export const createModyfiedArr = (
    arr: Array<SharedTypes.IForecastListItem>,
    timezone: number,
    dateForFilter: number,
): Array<SharedTypes.IForecastListItem>[] => {
    let modyfiedArr = [];
    for (let i = 0; i < 5; i++) {
        modyfiedArr[i] = arr.filter((item) => {
            const x = +getLocalDate(item.dt, timezone);
            return x === dateForFilter + i;
        });
    }
    return modyfiedArr;
};
