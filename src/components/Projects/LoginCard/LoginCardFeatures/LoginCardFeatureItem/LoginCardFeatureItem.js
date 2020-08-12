import React from "react";
import "./LoginCardFeatureItem.scss";

export default function LoginCardFeatureItem({ feature }) {
  return (
    <div className="item">
      <i className={feature.icon}></i>
      <h3 className="item__header">{feature.title}</h3>
      <p className="item__text">{feature.text}</p>
    </div>
  );
}
