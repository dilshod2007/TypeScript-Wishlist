import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{token: string}>) => {
            state.token = action.payload.token
        },
        register : (state, action: PayloadAction<{token: string}>) => {
            state.token = action.payload.token
        },
        logOut: (state) => {
            state.token = null
        }
    }
})

export default authSlice.reducer;
export const {login, logOut, register} = authSlice.actions;