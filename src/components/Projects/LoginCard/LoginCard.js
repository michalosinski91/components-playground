import React from "react";
import "./LoginCard.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import LoginCardForm from "./LoginCardForm/LoginCardForm";
import LoginCardFeatures from "./LoginCardFeatures/LoginCardFeatures";

export default function LoginCard() {
  return (
    <ProjectChangeAnimation>
      <div className="login-card">
        <LoginCardForm />
        <LoginCardFeatures />
      </div>
    </ProjectChangeAnimation>
  );
}
