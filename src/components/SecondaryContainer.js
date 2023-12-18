import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-[228px] relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies.addNowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.addPopularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"UpComing Movies"} movies={movies.upComingMovies}/>
      </div>
    </div>
  );
};

export default SecondaryContainer;
