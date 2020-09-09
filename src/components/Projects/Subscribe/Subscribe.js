import React from "react";
import "./Subscribe.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import SubscribeHeader from "./SubscribeHeader/SubscribeHeader";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

export default function Subscribe() {
  return (
    <ProjectChangeAnimation>
      <div className="subscribe__container">
        <SubscribeHeader />
        <SubscribeForm />
      </div>
    </ProjectChangeAnimation>
  );
}
