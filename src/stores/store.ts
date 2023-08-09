import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "@/stores/formSlice";
import platformReducer from "@/stores/platform.slice";

export const store = configureStore({
  reducer: {
    validation: validationReducer,
    platform: platformReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
