import React from "react";
import "./FeedbackScale.scss";
import Heading from "../Heading/Heading";
import Scale from "../Scale/Scale";
import FeedbackActions from "../FeedbackActions/FeedbackActions";

export default function FeedbackScale() {
  return (
    <div className="feedbackScale">
      <Heading text="How likely are you to answer this question?" />
      <Scale />
      <FeedbackActions />
    </div>
  );
}
