import React from "react";
import "./ProjectsCanvas.scss";

import Placeholder from "../Projects/Placeholder/Placeholder";
import Subscribe from "../Projects/Subscribe/Subscribe";
import PricingCard from "../Projects/PricingCard/PricingCard";
import NavigationCard from "../Projects/NavigationCard/NavigationCard";

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    Subscribe: Subscribe,
    PricingCard: PricingCard,
    NavigationCard: NavigationCard,
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
