import React, { useEffect } from 'react'
import { Header } from './Header'
import useNowPlayingMovies  from '../hooks/useNowPlayingMovies'
export const Browse = () => {
  //fetch data from TMDB Api and update store
  useNowPlayingMovies();

  return (
    <> 
        <Header/>
        {/*
          MainContainer 
             --videoBackground
             --video Title
          SecondaryConatiner
            --MovieList *n
              -cards*n
        */}
    </>
  )
}
