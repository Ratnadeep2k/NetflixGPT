import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
const useUpComingingMovies = ()=>{
    const dispatch = useDispatch();

    const getUpComingMovies= async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
       const json = await data.json();
       console.log(json);
       dispatch(addUpComingMovies(json.results));
    };
    useEffect(()=>{
      getUpComingMovies();
    },[])
}
export default useUpComingingMovies;