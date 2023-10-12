import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addSearchMovieResult } from "../utils/gptSlice";

const GptSearchBar =  () => {
  const selectLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const gptMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
  
    const json = await data.json();
    return json.results;
  }
  ;

  const gptSearchHandler = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      " Act As a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ".only sive me name of 5 movies , comma seperated like the example result given ahead . Example result - Gadar,Goolmaal,Sholey,Koi mil Gya, Tiger";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      //
    }

  
    
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => gptMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addSearchMovieResult({movieNames: gptMovies,searchMovieResult: tmdbResults}));



  }
  ;

  return (
    <div className="pt-36">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="outline w-2.5/3 md:w-1/3 px-4 py-4  rounded-lg"
          type="text"
          placeholder={lang[selectLang].gptSearchPlaceholder}
        />
        <button
          onClick={gptSearchHandler}
          className="bg-red-800 ml-2 px-10 py-5 rounded-[15px] text-white font-bold"
        >
          {lang[selectLang].search}
        </button>
      </form>
    </div>
  );
  };

export default GptSearchBar;
