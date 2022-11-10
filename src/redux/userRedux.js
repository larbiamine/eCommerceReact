import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginFailed, loginSuccess, loginStart, logout } =
  userSlice.actions;
export default userSlice.reducer;
