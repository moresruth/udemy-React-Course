import React from "react";
import "./MovieCard.css";

import BlackPanther from "../../assets/blackPantherweb.jpg";
import DoraExpo from "../../assets/Dora.jpg";
import Star from "../../assets/glowing-star.png";

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.rate_average}{" "}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 90) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
