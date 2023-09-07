import React from "react";

const FilterGroup = ({ mainRating, onRatingClick }) => {
  return (
    <ul className="align_center movie_filter">
      <li
        className={
          mainRating === 8 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(8)}
      >
        8+ Star
      </li>
      <li
        className={
          mainRating === 7 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(7)}
      >
        7+ Star
      </li>
      <li
        className={
          mainRating === 6 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(6)}
      >
        6+ Star
      </li>
    </ul>
  );
};

export default FilterGroup;
