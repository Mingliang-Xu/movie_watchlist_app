import React from "react";

import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const movieDisplay = props.watchlist.map((movie, index) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      addMovie={props.addMovie}
      removeMovie={props.removeMovie}
    />
  ));

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
