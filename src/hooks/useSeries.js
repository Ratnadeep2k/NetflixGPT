import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addSeries } from "../utils/moviesSlice";
const useSeries = ()=>{
    const dispatch = useDispatch();

    const getSeries= async()=>{
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
       const json = await data.json();
       console.log(json);
       dispatch(addSeries(json.results));
    };
    useEffect(()=>{
      getSeries();
    },[])
}
export default useSeries;