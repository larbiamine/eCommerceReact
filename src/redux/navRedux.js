import { createSlice } from "@reduxjs/toolkit";
import { sliderItems } from "../data";
const navSlice = createSlice({
  name: "navColor",
  initialState: {
    color: sliderItems[0].bg,
  },
  reducers: {
    setColor: (state, action) => {
      state.color = sliderItems[action.payload].bg
        ? sliderItems[action.payload].bg
        : sliderItems[0].bg;
    },
  },
});

export const { setColor } = navSlice.actions;
export default navSlice.reducer;
