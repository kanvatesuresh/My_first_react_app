import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
  src={movie.Poster}
  alt={movie.Title}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x600?text=No+Image";
  }}
/>

      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
