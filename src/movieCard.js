import React from "react";
import Styling from "./stylingText";
import Cover from "./assets/movieCover.png";
import MovieDetail from "./movieDetail";

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img src={Cover} alt="movie cover" />
      <div className="movie-info">
        <Styling
          arg1="Date de sortie "
          arg2="27 septembre 1968"
          time="(2h 21min)"
        />
        <Styling arg1="De" arg2="Stanley Kubrick" />
        <Styling
          arg1="Avec"
          arg2="Keir Dullea, Gary Lockwood, William Sylvester"
        />
        <Styling arg1="Genre" arg2="Science fiction" />
        <Styling arg1="Nationalités" arg2="Américain, Britannique" />
      </div>
      <MovieDetail />
    </div>
  );
};

export default MovieCard;
