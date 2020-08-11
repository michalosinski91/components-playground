import React from "react";
import "./Subscribe.scss";

import SubscribeHeader from "./SubscribeHeader/SubscribeHeader";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

export default function Subscribe() {
  return (
    <div className="subscribe__container">
      <SubscribeHeader />
      <SubscribeForm />
    </div>
  );
}
