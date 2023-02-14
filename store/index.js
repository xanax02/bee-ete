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

const userSlice = createSlice({
    name: 'user',
    initialState: {isAdmin: false},
    reducers: {
        admin(state) {
            state.isAdmin = true
        },
        user(state) {
            state.isAdmin = false
        }
    }
})

const store = configureStore({
    reducer: {authReducer: authSlice.reducer, userReducer: userSlice.reducer}
});

export const authActions = authSlice.actions;
export const userActions = userSlice.actions;

export default store;

