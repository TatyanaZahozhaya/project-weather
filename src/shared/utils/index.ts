import { SharedTypes } from '@shared';

export const getLocalTime = (a: number, b: number): string => {
    return new Date((a + b) * 1000).toUTCString().slice(5, -7);
};

export const getLocalDate = (a: number, b: number): string => {
    return new Date((a + b) * 1000).toUTCString().slice(5, 8);
};
export const getLocalDay = (a: number, b: number): string => {
    return new Date((a + b) * 1000).toUTCString().slice(5, 16);
};

export const getLocalHoursMinutes = (a: number, b: number): string => {
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
            return x === +getLocalDate(dateForFilter + 24*60*60*i, timezone);
        });
    }
    return modyfiedArr;
};


const findIndex = (str: string): number | undefined => {
    const reg = /(?<=\d)-/;
    const substr = str.match(reg);
    return substr?.index;
};
export const getCoordFromId = (str: string): Array<number> => {
    const index = findIndex(str);
    const pos = index ? index : 0;
    const lat = Number(str.slice(0, pos));
    const lon =  Number(str.slice(pos + 1, str.length));
    return [lat, lon]
};

