import { configureStore } from "@reduxjs/toolkit";
import { jsonAPi } from "../services/jsonplaceholder";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [jsonAPi.reducerPath]: jsonAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonAPi.middleware),
});

setupListeners(store.dispatch);
