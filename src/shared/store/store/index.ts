import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cityName, { type ICityNameState } from '../slice/city_name_slice';
import citiesList, { type ICitiesListState } from '../slice/cities_list_slice/index';
import cityGeo, { type ICityGeoState } from '../slice/city_geo_slice';
import cityData, { type ICityDataState } from '../slice/city_data_slice';
import cityForecast, { type ICityForecastState } from '../slice/city_forecast_slice';
import theme, { type IThemeState } from '../slice/theme_slice';

export interface IAppState {
    cityName: ICityNameState;
    citiesList: ICitiesListState;
    cityGeo: ICityGeoState;
    cityData: ICityDataState;
    cityForecast: ICityForecastState;
    theme: IThemeState;
}

const rootReducer = combineReducers({ cityName, citiesList, cityGeo, cityData, cityForecast, theme });
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
