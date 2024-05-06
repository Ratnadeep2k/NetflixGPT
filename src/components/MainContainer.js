import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import { VideoBackground } from './VideoBackground'

function MainContainer() {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    const mainMovie =movies[0];
    console.log(mainMovie)
  return (
    //need some movie title trailer
    <>
        
        <div>
            <VideoTitle/>
            <VideoBackground/>
        </div>
    
    </>
  )
}

export default MainContainer