import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "@/stores/formSlice";
import platformReducer from "@/stores/platform.slice";
import userReducer from "@/stores/user-info.slice";

export const store = configureStore({
  reducer: {
    validation: validationReducer,
    platform: platformReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
