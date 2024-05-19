import React, { useEffect } from 'react'
import { Header } from './Header'
import useNowPlayingMovies  from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopular';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpComingingMovies from '../hooks/useUpComingMovies';
import useSeries from '../hooks/useSeries';
export const Browse = () => {
  //fetch data from TMDB Api and update store
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingingMovies();
  useSeries();

  return (
    <> 
        <Header/>
        <MainContainer/>
        <SecondaryConatiner/>
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
