import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetail",
  initialState: {
    token: {},
    data: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("email", action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("email");
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { setToken, logout,setData } = userSlice.actions;
