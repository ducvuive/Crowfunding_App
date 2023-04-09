import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      //...action.payload,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    // để cập nhật thông tin user vào store
    authUpdateUser: (state, action) => {
      console.log("authUpdateUser ~ action", action);
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    },
    authFetchMe: (state, action) => ({
      ...state,
      // user: action.payload.user,
      // accessToken: action.payload.accessToken,
      ...action.payload,
    }),
    authRefreshToken: (state, action) => ({}),
    authLogout: (state, action) => ({}),
  },
});
export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
