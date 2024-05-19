import React from 'react'
import MovieList  from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryConatiner() {
  const movies =useSelector((store)=>store.movies)
  return (
   
    <div>
      <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Upcomming Movies"} movies ={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies ={movies.nowPlayingMovies}/>
    {/*
      MovieList - Popular 
      MovieList - Now playing
      MovieList - Trending
  
  */}
    </div>
   
  )
}

export default SecondaryConatiner