import axios from 'axios';

import { SharedTypes } from '@shared';

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org',
    params: {
        appid: process.env.REACT_APP_API_KEY,
    },
});

export class _Client {
    onResponse = async (url: string) => {
        return await instance.get(url).then((response) => response.data);
    };

    fetchCityGeo = ({
        city,
    }: SharedTypes.ICityGeoInput): Promise<SharedTypes.ICityGeoOutput> => {
        return this.onResponse(`/geo/1.0/direct?q=${city}&limit=10`);
    };

    fetchCityData = ({
        lat,
        lon,
    }: SharedTypes.ICityDataInput): Promise<SharedTypes.ICityDataOutput> => {
        return this.onResponse(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`);
    };

    fetchCityForecast = ({lat, lon}: SharedTypes.ICityForecastInput): Promise<SharedTypes.ICityForecastOutput> => {
        return this.onResponse(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`)
    };
    
}

export const Client = new _Client();
