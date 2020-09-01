import React from "react";
import "./FeedbackContainer.scss";

export default function FeedbackContainer(props) {
  if (props.size == "small") {
    return (
      <div className="feedback-container feedback-container--small">
        {props.children}
      </div>
    );
  }
  return <div className="feedback-container">{props.children}</div>;
}
