import React from "react";
import "./RatingContainer.scss";

export default function RatingContainer(props) {
  return <div className="rating-container">{props.children}</div>;
}
