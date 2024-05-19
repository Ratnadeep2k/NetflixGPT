import React from 'react'
import MovieList  from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryConatiner() {
  const movies =useSelector((store)=>store.movies)
  return (
   movies.nowPlayingMovies&& (
    <div className='bg-black'>
    <div className='-mt-20 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies ={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies ={movies.popularMovies}/>
      <MovieList title={"Upcomming Movies"} movies ={movies.upComingMovies}/>
      <MovieList title={"Tv Series "} movies ={movies.series}/>
    {/*
      MovieList - Popular 
      MovieList - Now playing
      MovieList - Trending
  
  */}
    </div>
    </div>
    )
   
  )
}

export default SecondaryConatiner