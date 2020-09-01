import React, { useState } from "react";
import "./Scale.scss";
import ScaleItem from "./ScaleItem/ScaleItem";

export default function Scale() {
  const [activeRating, setActiveRating] = useState(8);
  const ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="feedback-scale">
      <div className="feedback-scale__container">
        {ratings.map((rating) => (
          <ScaleItem
            key={rating}
            number={rating}
            active={rating == activeRating ? true : false}
            setActiveRating={setActiveRating}
          />
        ))}
      </div>
      <div className="feedback-scale__container">
        <div className="feedback-scale__legend">Not likely at all</div>
        <div className="feedback-scale__legend">Extremely likely</div>
      </div>
    </div>
  );
}
