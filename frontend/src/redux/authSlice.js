import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        email: "",
        name: "",
        id: ""
    },
    reducers: {
        increment: (state = action) => {
            state.counter += 1;
        },
    },
});

export const { increment } = auth.actions;