import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        userData:"",
        userMesaggeError:""
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setUserMessage: (state, action) => {
            state.userMesaggeError = action.payload
        },
    },
});

export const { setUserData, setUserMessage } = authReducer.actions;

export default authReducer.reducer;
