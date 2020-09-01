import React from "react";
import "./FeedbackScaleAndText.scss";
import Heading from "../Heading/Heading";
import Scale from "../Scale/Scale";
import FeedbackText from "../FeedbackText/FeedbackText";
import FeedbackActions from "../FeedbackActions/FeedbackActions";

export default function FeedbackScaleAndText() {
  return (
    <div className="feedbackScaleAndText">
      <Heading text="How likely are you to answer this question?" />
      <Scale />
      <FeedbackText />
      <FeedbackActions />
    </div>
  );
}
