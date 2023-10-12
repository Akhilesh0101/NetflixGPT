import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
  showGptSearchView: false,
  searchMovieResult:null,
  movieNames:null,
},
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addSearchMovieResult: (state, action)=>{
      const { movieNames, searchMovieResult}= action.payload;
      state.movieNames = movieNames;
      state.searchMovieResult= searchMovieResult;
     
    }
  },
});

export const { toggleGptSearchView, addSearchMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
