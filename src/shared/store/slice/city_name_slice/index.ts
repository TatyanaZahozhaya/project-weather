import { createSlice } from '@reduxjs/toolkit';

export interface ICityNameState {
    cityName: string;
}

const initialState: ICityNameState = {
    cityName: '',
};

const cityNameSlice = createSlice({
    name: 'cityName',
    initialState,
    reducers: {
        cityNameAdded: (state, action) => {
            state.cityName = action.payload;
        },
    },
});

const { actions, reducer } = cityNameSlice;
export default reducer;
export const { cityNameAdded } = actions;
