import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  userName: "",
  role: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(state)
      console.log("this is payload", action.payload)
      state = action.payload
      return state
    }

  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
