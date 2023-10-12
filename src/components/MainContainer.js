import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=> store?.movies?.nowPlayingMovies);

    if(!movies) return;
    

    const mainMovie = movies[0];
    const {original_title, overview} = mainMovie; 
  return (
    <div className='pt-[30%] bg-black   md:pt-0'>
        <VideoTitle title={original_title} overview={overview}
        />
        <VideoBackground movieId = {mainMovie?.id}></VideoBackground>
        
    </div>
  )
}

export default MainContainer