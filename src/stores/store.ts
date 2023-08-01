import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "@/stores/formSlice";

export const store = configureStore({
  reducer: {
    validation: validationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
