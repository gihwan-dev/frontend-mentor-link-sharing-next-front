import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValidationState {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

const initialState: ValidationState = {
  email: true,
  password: true,
  confirmPassword: true,
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setEmailValidation: (state, action: PayloadAction<boolean>) => {
      state.email = action.payload;
    },

    setPasswordValidation: (state, action: PayloadAction<boolean>) => {
      state.password = action.payload;
    },

    setConfirmPasswordValidation: (state, action: PayloadAction<boolean>) => {
      state.confirmPassword = action.payload;
    },
    clearValidationState: state => {
      state.password = true;
      state.email = true;
      state.confirmPassword = true;
    },
  },
});

export const {
  setEmailValidation,
  setPasswordValidation,
  setConfirmPasswordValidation,
  clearValidationState,
} = validationSlice.actions;

export default validationSlice.reducer;
