import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
  name: "heroes",
  initialState: {
    list: [],
  },
  reducers: {
    setHeroes: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setHeroes } = heroSlice.actions;

export default heroSlice.reducer;
