import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        firstname: null,
        username: null,
        image: null,
        token: null,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.firstname = action.payload.firstname;
            state.value.username = action.payload.username;
            state.value.image = action.payload.image;
            state.value.token = action.payload.token;
        },
        logout: (state) => {
            state.value.firstname = null;
            state.value.username = null;
            state.value.image = null;
            state.value.token = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;