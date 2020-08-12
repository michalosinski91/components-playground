import React from "react";
import "./LoginCard.scss";

import LoginCardForm from "./LoginCardForm/LoginCardForm";
import LoginCardFeatures from "./LoginCardFeatures/LoginCardFeatures";

export default function LoginCard() {
  return (
    <div className="login-card">
      <LoginCardForm />
      <LoginCardFeatures />
    </div>
  );
}
