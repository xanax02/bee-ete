import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLogged: false},
    reducers: {
        login(state) {
            state.isLogged = true;
        },
        logout(state) {
            state.isLogged = false;
        }
    }
})

const store = configureStore({
    reducer: authSlice.reducer
});

export const authActions = authSlice.actions;

export default store;

