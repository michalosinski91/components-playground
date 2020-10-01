import React from "react";
import "./RatingOverview.scss";

import RatingLink from "../RatingLink/RatingLink";
import RatingOverviewItem from "./RatingOverviewItem/RatingOverviewItem";

export default function RatingOverview() {
  const reviews = {
    5: 312,
    4: 208,
    3: 302,
    2: 123,
    1: 35,
  };

  function getReviewTotal() {
    const vals = Object.values(reviews);
    const total = vals.reduce((acc, val) => {
      return acc + val;
    }, 0);
    return total;
  }

  function getPercentage(val) {
    return ((val / getReviewTotal()) * 100).toFixed(1);
  }

  return (
    <div className="rating-overview">
      <h2 className="rating-overview__rev-number">
        {getReviewTotal()} reviews
      </h2>
      <div className="rating-overview__breakdown">
        {Object.entries(reviews).map(([key, value]) => (
          <RatingOverviewItem
            key={key}
            stars={key}
            percentage={getPercentage(value)}
          />
        ))}
      </div>
      <RatingLink text="Read the reviews" link="#" />
    </div>
  );
}
