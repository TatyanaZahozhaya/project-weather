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
