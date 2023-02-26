import { createSlice, configureStore } from '@reduxjs/toolkit';

const iuState = [];

const addUsrSlice = createSlice({
    name: 'usr',
    iuState,
    reducers: {
        add(state, action) {
            state = action.payload;
        }
    }
});

const store = configureStore({
    reducer: addUsrSlice.reducer
});

export const addUsrActions = addUsrSlice.actions;

export default store;