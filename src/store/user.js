import { createSlice } from "@reduxjs/toolkit";

const defAvatar = "https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png";
const initialValue = {name: "", age: 0, email: "", avatar: defAvatar, logged: false};

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialValue;
        },
    }
});

// Як читати значення з цього файлу?

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;