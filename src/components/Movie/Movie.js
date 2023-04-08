import React, { useState } from 'react';

function Movie(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="movie-card">
      <img src={props.movie.poster} alt={props.movie.title} />
      <h2>{props.movie.title}</h2>
      <p>{props.movie.year}</p>
      <button onClick={handleAddToFavorites}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default Movie;