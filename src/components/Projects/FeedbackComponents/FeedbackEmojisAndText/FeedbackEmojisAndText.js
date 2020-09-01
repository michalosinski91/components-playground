import React from "react";
import "./FeedbackEmojisAndText.scss";

import Heading from "../Heading/Heading";
import FeedbackText from "../FeedbackText/FeedbackText";
import EmojiScale from "../EmojiScale/EmojiScale";
import FeedbackActions from "../FeedbackActions/FeedbackActions";

export default function FeedbackEmojisAndText() {
  return (
    <div className="feedbackEmojisAndText">
      <Heading text="How likely are you to answer this question?" />
      <EmojiScale />
      <FeedbackText />
      <FeedbackActions />
    </div>
  );
}
