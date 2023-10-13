import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);
