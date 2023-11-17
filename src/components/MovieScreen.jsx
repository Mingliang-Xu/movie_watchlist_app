import React from "react";

import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const decrement = () => {
    props.page !== 1 && props.setPage(props.page - 1);
  };
  const increment = () => {
    props.setPage(props.page + 1);
  };

  const movieDisplay = props.movieList.map((movie, index) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      addMovie={props.addMovie}
      watchList={props.watchList}
      removeMovie={props.removeMovie}
    ></MovieCard>
  ));
  return (
    <div className="page">
      <h1>Oliver's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        {props.page > 1 && <button onClick={decrement}>Previous</button>}
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
