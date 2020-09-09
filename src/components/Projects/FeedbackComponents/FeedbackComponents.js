import React from "react";
import "./FeedbackComponents.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import FeedbackContainer from "./FeedbackContainer/FeedbackContainer";
import FeedbackEmojis from "./FeedbackEmojis/FeedbackEmojis";
import FeedbackEmojisAndText from "./FeedbackEmojisAndText/FeedbackEmojisAndText";
import FeedbackScale from "./FeedbackScale/FeedbackScale";
import FeedbackScaleAndText from "./FeedbackScaleAndText/FeedbackScaleAndText";

export default function FeedbackComponents() {
  return (
    <ProjectChangeAnimation>
      <div className="feedback-components">
        <FeedbackContainer>
          <FeedbackScale />
        </FeedbackContainer>
        <FeedbackContainer size="small">
          <FeedbackEmojis />
        </FeedbackContainer>
        <FeedbackContainer size="small">
          <FeedbackEmojisAndText />
        </FeedbackContainer>
        <FeedbackContainer>
          <FeedbackScaleAndText />
        </FeedbackContainer>
      </div>
    </ProjectChangeAnimation>
  );
}
