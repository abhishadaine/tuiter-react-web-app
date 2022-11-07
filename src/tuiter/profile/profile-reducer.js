import { createSlice } from "@reduxjs/toolkit";
import profile from "../profile/profile.json";

const profileSlice = createSlice({
    name: "prof",
    initialState: profile
});

export default profileSlice.reducer;

