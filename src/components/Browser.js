import React, { useEffect } from "react";
import Header from "./Header";
import nowPlayMovies from "../hooks/useNowPlayMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowTrendingMovies from "../hooks/useNowTrendingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);

  nowPlayMovies();
  useNowTrendingMovies();

  return (
    <div className="w-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
