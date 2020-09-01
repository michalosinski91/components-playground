import React from "react";
import "./FeedbackEmojis.scss";
import Heading from "../Heading/Heading";
import EmojiScale from "../EmojiScale/EmojiScale";
import FeedbackActions from "../FeedbackActions/FeedbackActions";

export default function FeedbackEmojis() {
  return (
    <div className="feedbackEmojis">
      <Heading text="How likely are you to answer this question?" />
      <EmojiScale />
      <FeedbackActions />
    </div>
  );
}
