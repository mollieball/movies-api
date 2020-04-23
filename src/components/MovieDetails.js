import React from "react";
import Movie from "./Movie";

function MovieDetails(props) {
  const movie = props.location.state;

  return <Movie title={movie.title} poster={movie.posterUrl} />;
}

export default MovieDetails;
