import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPlatformDto } from "@/utilities/platforms/react-query";

export interface Platform {
  id: string;
  title: string;
  link: string;
  isLinkValid: boolean;
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

interface validationInterface {
  index: number;
  validation: boolean;
}

interface setLinkInterface {
  index: number;
  link: string;
}

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    initializePlatform: (state, action: PayloadAction<GetPlatformDto[]>) => {
      if (!action.payload) {
        return;
      }
      const newPlatforms = action.payload.map<Platform>(item => {
        return {
          id: item.id,
          link: item.link,
          title: item.title,
          isLinkValid: true,
        };
      });
      state.platforms = [...newPlatforms];
    },
    setPlatform: (state, action: PayloadAction<setPlatformInterface>) => {
      const index = action.payload.index;
      state.platforms[index].title = action.payload.title;
    },
    addPlatform: state => {
      const newPlatform: Platform = {
        id: Math.random().toString().slice(2),
        title: "Github",
        isLinkValid: true,
        link: "",
      };
      const newList = [...state.platforms, newPlatform];
      state.platforms = newList;
    },
    removePlatform: (state, action: PayloadAction<number>) => {
      const newList = state.platforms.filter(
        (item, index) => index !== action.payload,
      );
      state.platforms = newList;
    },
    reOrderPlatform: (state, action: PayloadAction<Platform[]>) => {
      state.platforms = action.payload;
    },
    setLinkValidation: (state, action: PayloadAction<validationInterface>) => {
      state.platforms[action.payload.index].isLinkValid =
        action.payload.validation;
    },
    setLink: (state, action: PayloadAction<setLinkInterface>) => {
      const { index, link } = action.payload;
      state.platforms[index].link = link;
    },
  },
});

export const {
  initializePlatform,
  setPlatform,
  addPlatform,
  removePlatform,
  reOrderPlatform,
  setLinkValidation,
  setLink,
} = platformSlice.actions;

export default platformSlice.reducer;
