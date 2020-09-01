import React from "react";
import "./ScaleItem.scss";

export default function ScaleItem({ number, active, setActiveRating }) {
  return (
    <div
      className={active ? "scale-item scale-item--active" : "scale-item"}
      onClick={() => setActiveRating(number)}
    >
      <div className="scale-item__text">{number}</div>
    </div>
  );
}
