import Movie from "./Movie";
import React, { useState, useEffect } from "react";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("");
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.movies);
        setGenres(response.genres);
      });
  }, []);

  function onAddFavourite(movie) {
    setFavourites([...favourites, movie]);
  }

  function onRemoveFavourite(movie) {
    setFavourites(favourites.filter((m) => m.id !== movie.id));
  }

  function pickRandomFavourite() {
    if (favourites.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * (favourites.length - 1));
    const movie = favourites[randomIndex];

    props.history.push("/movie/" + movie.id, {
      title: movie.title,
      poster: movie.posterUrl,
    });
  }

  function onChangeGenre(event) {
    setCurrentGenre(event.target.value);
  }

  return (
    <div>
      <h1>Favourites</h1>
      <button onClick={pickRandomFavourite}>Pick Random Movie </button>
      {favourites.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.posterUrl}
          onAddFavourite={onAddFavourite}
          onRemoveFavourite={onRemoveFavourite}
        />
      ))}

      <h1>Films</h1>

      <select onChange={onChangeGenre} value={currentGenre}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul>
        {movies
          .filter((movie) => {
            if (currentGenre === "") {
              return true;
            }
            return movie.genres.includes(currentGenre);
          })
          .map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              onAddFavourite={onAddFavourite}
              onRemoveFavourite={onRemoveFavourite}
            />
          ))}
      </ul>
    </div>
  );
}
export default Movies;
