import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { SharedTypes, Client } from '@shared';

export interface ICityDataState {
    cityData: SharedTypes.ICityDataOutput;
    cityDataLoadingStatus: 'loading' | 'idle' | 'error';
    error: any;
}

const initialState: ICityDataState = {
    cityData: {} as SharedTypes.ICityDataOutput,
    cityDataLoadingStatus: 'idle',
    error: '',
};

export const fetchCityDetailedData = createAsyncThunk(
    'cityData/fetchCityDetailedData',
    async function ({ lat, lon }: SharedTypes.ICityDataInput, { rejectWithValue }) {
        try {
            const { fetchCityData } = Client;
            return await fetchCityData({ lat, lon });
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const cityDataSlice = createSlice({
    name: 'cityData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCityDetailedData.pending, (state) => {
                state.cityDataLoadingStatus = 'loading';
            })
            .addCase(fetchCityDetailedData.fulfilled, (state, action) => {
                state.cityDataLoadingStatus = 'idle';
                state.cityData = action.payload;
            })
            .addCase(fetchCityDetailedData.rejected, (state, action) => {
                state.cityDataLoadingStatus = 'error';
                state.error = action.payload;
            });
    },
});

const { reducer } = cityDataSlice;
export default reducer;
