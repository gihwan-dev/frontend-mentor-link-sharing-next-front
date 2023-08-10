import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  image: File | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

const initialState: User = {
  image: null,
  firstName: null,
  lastName: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<File>) => {
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
  },
});

export const { setImage, setEmail, setLastName, setFirstName } =
  userSlice.actions;

export default userSlice.reducer;
