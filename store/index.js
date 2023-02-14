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

const store = configureStore(authSlice.reducer);

export default store;

