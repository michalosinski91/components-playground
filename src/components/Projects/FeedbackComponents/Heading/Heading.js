import React from "react";
import "./Heading.scss";

export default function Heading({ text }) {
  return (
    <div className="feedback-heading__container">
      <h4 className="feedback-heading__text">{text}</h4>
    </div>
  );
}
