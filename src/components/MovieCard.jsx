import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  console.log(props);
  const inWatchList = props.watchList.filter((mov) => {
    return mov.id === props.movie.id;
  });

  const button =
    inWatchList.length === 0 ? (
      <button
        onClick={() => {
          props.addMovie(props.movie);
        }}
      >
        Add to List
      </button>
    ) : (
      <button
        onClick={() => {
          props.removeMovie(props.movie);
        }}
      >
        Remove
      </button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          alt="a poster of a movie"
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        />
        <h3>{props.movie.original_title}</h3>
      </div>
      {
        /* {
        <button
          onClick={() => {
            props.addMovie(props.movie);
          }}
        >
          Add to List
        </button> */ button
      }
    </div>
  );
};

export default MovieCard;
