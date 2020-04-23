import React from "react";

function Movie({ id, title, poster, onAddFavourite, onRemoveFavourite }) {
  function addToFavourites() {
    onAddFavourite({ id, title, posterUrl: poster });
  }

  function removeFromFavourites() {
    onRemoveFavourite({ id });
  }

  return (
    <div>
      <img src={poster} alt="" style={{ width: 50 }} />
      <p>{title}</p>
      {onAddFavourite && onRemoveFavourite && (
        <>
          <button onClick={addToFavourites}>Add to Favourites</button>
          <button onClick={removeFromFavourites}>Remove from Favourites</button>
        </>
      )}
    </div>
  );
}

export default Movie;
