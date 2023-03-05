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
            state.token = action.payload
            state.isAuthenticated = state.token;
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