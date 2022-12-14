import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://api.openweathermap.org',
    params: {
        appid: process.env.REACT_APP_API_KEY,
    },
});
