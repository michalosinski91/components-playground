import React from "react";
import "./RatingSummary.scss";
import RatingBtn from "../RatingBtn/RatingBtn";

export default function RatingSummary() {
  const rating = 3.6;
  const maxRating = 5;
  function getWidth() {
    const percentage = (rating / maxRating) * 100;
    return `${percentage}%`;
  }

  return (
    <div className="rating-summary">
      <h2 className="rating-summary__rating">{rating.toFixed(1)}</h2>
      <div className="rating-summary__star-container">
        <div
          className="rating-summary__stars-top"
          style={{ width: getWidth() }}
        >
          <span>{"\u2605"}</span>
          <span>{"\u2605"}</span>
          <span>{"\u2605"}</span>
          <span>{"\u2605"}</span>
          <span>{"\u2605"}</span>
        </div>
        <div className="rating-summary__stars-bottom">
          <span>{"\u2606"}</span>
          <span>{"\u2606"}</span>
          <span>{"\u2606"}</span>
          <span>{"\u2606"}</span>
          <span>{"\u2606"}</span>
        </div>
      </div>
      <RatingBtn text="Sign in" />
      <p className="rating-summary__instruction">
        To rate and review, please sign in.
      </p>
    </div>
  );
}
