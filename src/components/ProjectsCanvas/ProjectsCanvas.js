import React from "react";
import "./ProjectsCanvas.scss";

import Placeholder from "../Projects/Placeholder/Placeholder";
import Subscribe from "../Projects/Subscribe/Subscribe";
import PricingCard from "../Projects/PricingCard/PricingCard";
import NavigationCard from "../Projects/NavigationCard/NavigationCard";
import LoginCard from "../Projects/LoginCard/LoginCard";
import BlogCards from "../Projects/BlogCards/BlogCards";

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    Subscribe: Subscribe,
    PricingCard: PricingCard,
    NavigationCard: NavigationCard,
    LoginCard: LoginCard,
    BlogCards: BlogCards,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent />;
  }

  return (
    <div className="canvas">
      <div className="canvas-container">
        {!activeProject ? <Placeholder /> : Comp(activeProject)}
      </div>
    </div>
  );
}
