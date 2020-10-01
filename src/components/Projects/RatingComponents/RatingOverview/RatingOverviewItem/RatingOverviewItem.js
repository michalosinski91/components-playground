import React from "react";

export default function RatingOverviewItem({ stars, percentage }) {
  return (
    <div className="rating-overview__item">
      <h4>{stars}</h4>
      <i className="fas fa-star"></i>
      <div className="rating-overview__bar-container">
        <div
          className="rating-overview__bar--top"
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="rating-overview__bar--bottom"></div>
      </div>
      <p>{percentage}%</p>
    </div>
  );
}
