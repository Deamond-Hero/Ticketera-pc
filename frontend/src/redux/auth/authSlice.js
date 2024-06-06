import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        userData:"",
        userMesaggeError:"",
        isLoged:false
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
            console.log(state.userData)
        },
        setUserMessage: (state, action) => {
            state.userMesaggeError = action.payload
        },
        setUserLoged: (state, action) => {
            state.isLoged = action.payload
        },
    },
});

export const { setUserData, setUserMessage, setUserLoged } = authReducer.actions;

export default authReducer.reducer;