import { createSlice } from '@reduxjs/toolkit';

export interface IThemeState {
    theme: string;
}

const initialState: IThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setAppTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

const { actions, reducer } = themeSlice;
export default reducer;
export const { setAppTheme } = actions;
