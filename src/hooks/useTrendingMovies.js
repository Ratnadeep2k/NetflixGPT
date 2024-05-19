import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = ()=>{
    const dispatch = useDispatch();

    const getTrendingMovies= async()=>{
      const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', API_OPTIONS)
       const json = await data.json();
       console.log(json);
       dispatch(addTrendingMovies(json.results));
    };
    useEffect(()=>{
      getTrendingMovies();
    },[])
}
export default useTrendingMovies;