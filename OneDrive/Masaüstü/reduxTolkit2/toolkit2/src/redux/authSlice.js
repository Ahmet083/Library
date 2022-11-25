import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    token: localStorage.getItem('token'),
}


export const authSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducer : {
        setToken: (state, action) => {
            localStorage.setItem('token', action.payload)
            state.token = action.payload
        },
        removeToken: (state) => {
            localStorage.removeItem('token')
            state.token = null
        },
    },
})

export const {removeToken, setToken} = authSlice.actions

export default authSlice.reducer