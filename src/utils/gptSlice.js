import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovie: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovieResult: (state, action) => {
      state.gptMovie = action.payload;
    },
  },
});

export const { toggleGptSearchView, addSearchMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
