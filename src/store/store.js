import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    app: appSlice,
  },
});

export default store;
