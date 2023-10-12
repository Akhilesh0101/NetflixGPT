import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMG } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
    <div className='absolute -z-10'>
    <img className='w-screen h-screen object-cover' alt="background-img" src={BACKGROUND_IMG}/>
    </div>
    <div className='pt-[25%] md:p-0'>
       
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    x
    </>
  )
}

export default GptSearch