import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {  addNowTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowTrendingMovies = () => {
  const nowTrendingMovies = useSelector((store)=> store.movies.nowTrendingMovies)
  const dispatch = useDispatch();
  const getNowTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowTrendingMovies(json.results));
  };
  useEffect(() => {
    !nowTrendingMovies && getNowTrendingMovies();
  }, []);
};
export default useNowTrendingMovies;
