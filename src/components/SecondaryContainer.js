import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  
  return (
    <div className=' bg-black w-screen  '>
      <div className='mt-0 md:-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies= {movies.nowTrendingMovies}/>
      <MovieList title={"Popular"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies= {movies.nowPlayingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer