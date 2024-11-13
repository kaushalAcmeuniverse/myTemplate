import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        token: "test tokan work correctly",
    },
    reducers: {
        setAuthLogin: (state, { payload }) => {
            state.isAuthenticated = true;
            state.token = payload;
        },
        setAuthLogout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        }
    }
})

export default auth.reducer
export const { setAuthLogin, setAuthLogout } = auth.actions