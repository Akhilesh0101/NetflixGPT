import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 text-left absolute text-white bg-gradient-to-r from-black '>
       
       <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      
       <div className=''>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-90' >▶️ Play</button>
        <button className=' mx-2 bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 mt-4 md:mt-0  text-xl bg-opacity-50 rounded-lg'>More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle 