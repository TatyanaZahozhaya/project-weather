import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { SharedTypes, Client } from '@shared';

export interface ICitiesListState {
    cityName: string;
    citiesList: Array<SharedTypes.ICityGeo>;
    citiesListLoadingStatus: 'loading' | 'idle' | 'error';
    error: any; 
}

const initialState: ICitiesListState = {
    cityName: '',
    citiesList: [],
    citiesListLoadingStatus: 'idle',
    error: '',
};

export const fetchCitiesList = createAsyncThunk(
    'citiesList/fetchCitiesList',
    async function (city: string, { rejectWithValue }) {
        try {
            const { fetchCityGeo } = Client;
            const coord = await fetchCityGeo({ city: city });

            return coord;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const citiesListSlice = createSlice({
    name: 'citiesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCitiesList.pending, (state) => {
                state.citiesListLoadingStatus = 'loading';
            })
            .addCase(fetchCitiesList.fulfilled, (state, action) => {
                state.citiesListLoadingStatus = 'idle';
                state.citiesList = action.payload;
            })
            .addCase(fetchCitiesList.rejected, (state, action) => {
                state.citiesListLoadingStatus = 'error';
                state.error = action.payload;
            });
    },
});

const { reducer } = citiesListSlice;
export default reducer;

