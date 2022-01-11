import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "heroes",
  initialState: {
    list: [],
    filters: {
      quantity: 0,
      quality: [],
    },
  },
  reducers: {
    setHeroes: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setHeroes } = heroSlice.actions;

export default heroSlice.reducer;
