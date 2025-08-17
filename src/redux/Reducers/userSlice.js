import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  role: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) =>
      // console.log("this is state",state)
      // console.log("this is action",action.payload)
      (state = action.payload),
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
