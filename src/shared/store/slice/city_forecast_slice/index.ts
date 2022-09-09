import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { cityForecastInitialState } from './initial_state_parts';
import { SharedTypes, Client } from '@shared';

export interface ICityForecastState {
    cityForecast: SharedTypes.ICityForecastOutput;
    cityForecastLoadingStatus: 'loading' | 'idle' | 'error';
    error: any;
}

const initialState: ICityForecastState = {
    cityForecast: cityForecastInitialState,
    cityForecastLoadingStatus: 'idle',
    error: '',
};

export const fetchCityForecast5Days = createAsyncThunk(
    'cityForecast/fetchCityForecast5Days',
    async function ({ lat, lon }: SharedTypes.ICityCoord, { rejectWithValue }) {
        try {
            const { fetchCityForecast } = Client;
            return await fetchCityForecast({ lat, lon });
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const cityForecastSlice = createSlice({
    name: 'cityForecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityForecast5Days.pending, (state) => {
                state.cityForecastLoadingStatus = 'loading';
            })
            .addCase(fetchCityForecast5Days.fulfilled, (state, action) => {
                state.cityForecastLoadingStatus = 'idle';
                state.cityForecast = action.payload;
            })
            .addCase(fetchCityForecast5Days.rejected, (state, action) => {
                state.cityForecastLoadingStatus = 'error';
                state.error = action.payload;
            });
    },
});

const { reducer } = cityForecastSlice;
export default reducer;
