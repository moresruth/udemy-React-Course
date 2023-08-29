import React from "react";
import "./MovieCard.css";

import BlackPanther from "../../assets/blackPantherweb.jpg";
import DoraExpo from "../../assets/Dora.jpg";
import Star from "../../assets/glowing-star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img src={BlackPanther} alt="poster" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2022</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
