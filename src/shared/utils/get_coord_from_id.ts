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
