import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        nowTrendingMovies:null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;
        },
        addNowTrendingMovies :(state, action) =>{
          state.nowTrendingMovies= action.payload;
        }
    }
})
export const{addNowPlayingMovies, addTrailerVideo , addNowTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;
