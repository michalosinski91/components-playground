import React from "react";
import "./FeedbackText.scss";

export default function FeedbackText() {
  return (
    <div className="feedback-text">
      <h5 className="feedback-text__heading">Tell us how we can improve</h5>
      <textarea
        className="feedback-text__textarea"
        placeholder="Write your message here"
      ></textarea>
    </div>
  );
}
