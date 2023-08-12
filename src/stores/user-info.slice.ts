import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  image: string | null;
  firstName: string | null;
  firstNameValidation: boolean;
  lastNameValidation: boolean;
  lastName: string | null;
  email: string | null;
}

const initialState: User = {
  image: null,
  firstName: null,
  lastName: null,
  email: null,
  firstNameValidation: true,
  lastNameValidation: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstNameValidate: (state, action: PayloadAction<boolean>) => {
      state.firstNameValidation = action.payload;
    },
    setLastNameValidate: (state, action: PayloadAction<boolean>) => {
      state.lastNameValidation = action.payload;
    },
  },
});

export const {
  setImage,
  setEmail,
  setLastName,
  setFirstName,
  setFirstNameValidate,
  setLastNameValidate,
} = userSlice.actions;

export default userSlice.reducer;
