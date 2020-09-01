import React from "react";
import "./FeedbackActions.scss";

import FeedbackSkip from "./FeedbackSkip/FeedbackSkip";
import FeedbackSubmit from "./FeedbackSubmit/FeedbackSubmit";

export default function FeedbackActions() {
  return (
    <div className="feedback-actions">
      <FeedbackSkip />
      <FeedbackSubmit />
    </div>
  );
}
