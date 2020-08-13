import React from "react";
import "./Button.scss";

export default function Button(props) {
  if (props.type == "dark") {
    return (
      <button className="blog-card-btn blog-card-btn--dark">
        {props.text}
      </button>
    );
  }
  return <button className="blog-card-btn">{props.text}</button>;
}
