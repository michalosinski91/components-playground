import React from "react";
import "./PricingCard.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import PricingOption from "./PricingOption/PricingOption";

export default function PricingCard() {
  const basicOption = {
    name: "basic",
    price: "Free",
    visitorLimit: 3000,
    features: [
      "Limited reports",
      "Unlimited projects",
      "Data storage for 1 year",
    ],
    buttonStyle: "btn btn--no-fill",
    buttonText: "Start now",
  };

  const proOption = {
    name: "pro",
    price: 19,
    visitorLimit: 10000,
    features: [
      "Unlimited reports",
      "15-days free trial",
      "Data storage for 3 year",
    ],
    buttonStyle: "btn btn--fill",
    buttonText: "Try it",
  };

  return (
    <ProjectChangeAnimation>
      <div className="pricing-card-container">
        <PricingOption option={basicOption} />
        <div className="divider">{null}</div>
        <PricingOption option={proOption} />
      </div>
    </ProjectChangeAnimation>
  );
}
