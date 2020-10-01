import React from "react";
import "./RatingLink.scss";
export default function RatingLink({ text, link }) {
  return (
    <a className="rating-link" href={link}>
      <p>{text}</p>
      <i className="fas fa-chevron-right"></i>
    </a>
  );
}
