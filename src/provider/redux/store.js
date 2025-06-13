import { configureStore } from "@reduxjs/toolkit";
import { servicesAPI } from "../query/services";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [servicesAPI.reducerPath]: servicesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesAPI.middleware),
});

setupListeners(store.dispatch);
