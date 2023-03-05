import { createSlice, configureStore } from '@reduxjs/toolkit';

const iuState = {
    token: '',
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: iuState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        }

    }
});

const store = configureStore({
    reducer: authSlice.reducer
});

export const authActions = authSlice.actions;

export default store;