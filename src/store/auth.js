import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthinicated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logout(state) {
            state.isAuthinicated = false;
        },
        login(state) {
            state.isAuthinicated = true;
        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;