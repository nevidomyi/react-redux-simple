import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const defAvatar = "https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png";

export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", age: 0, email: "", avatar: defAvatar, logged: false}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        // logout
    }
});

// Як читати значення з цього файлу?

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;