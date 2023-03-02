import { createSlice, configureStore } from '@reduxjs/toolkit';

const iuState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: iuState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }

    }
});

const store = configureStore({
    reducer: authSlice.reducer
});

export const authActions = authSlice.actions;

export default store;