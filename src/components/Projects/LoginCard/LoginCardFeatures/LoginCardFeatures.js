import React from "react";
import "./LoginCardFeatures.scss";

import LoginCardFeatureItem from "./LoginCardFeatureItem/LoginCardFeatureItem";

export default function LoginCardFeatures() {
  const features = [
    {
      id: 1,
      title: "Development",
      text:
        "A modern and clean design system for developing fast and powerful web interfaces.",
      icon: "fas fa-code fa-2x",
    },
    {
      id: 2,
      title: "Features",
      text:
        "A modern and clean design system for developing fast and powerful web interfaces.",
      icon: "fas fa-gift fa-2x",
    },
    {
      id: 3,
      title: "Updates",
      text:
        "A modern and clean design system for developing fast and powerful web interfaces.",
      icon: "fas fa-edit fa-2x",
    },
  ];

  return (
    <div className="login-card-features">
      {features.map((feature) => (
        <LoginCardFeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
