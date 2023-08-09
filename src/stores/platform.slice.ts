import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Platform {
  title: string;
}

interface PlatformListState {
  platforms: Platform[];
}

const initialState: PlatformListState = {
  platforms: [],
};

interface setPlatformInterface {
  index: number;
  title: string;
}

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    setPlatform: (state, action: PayloadAction<setPlatformInterface>) => {
      const index = action.payload.index;
      state.platforms[index].title = action.payload.title;
    },
    addPlatform: state => {
      const newPlatform: Platform = { title: "Github" };
      const newList = [...state.platforms, newPlatform];
      state.platforms = newList;
    },
    removePlatform: (state, action: PayloadAction<number>) => {
      const newList = state.platforms.filter(
        (item, index) => index !== action.payload,
      );
      state.platforms = newList;
    },
  },
});

export const { setPlatform, addPlatform, removePlatform } =
  platformSlice.actions;

export default platformSlice.reducer;
