import { createSlice } from '@reduxjs/toolkit';

import { SharedTypes } from '@shared';

export interface ICityGeoState {
    cityGeo: SharedTypes.ICityGeo;
}

const initialState: ICityGeoState = {
    cityGeo: {
        lat: 0,
        lon: 0,
        name: '',
        country: '',
        state: '',
    },
};

const cityGeoSlice = createSlice({
    name: 'cityGeo',
    initialState,
    reducers: {
        cityGeoAdded: (state, action) => {
            state.cityGeo = action.payload;
        },
    },
});

const { actions, reducer } = cityGeoSlice;
export default reducer;
export const { cityGeoAdded } = actions;
