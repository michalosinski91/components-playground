import React from "react";
import "./ProjectsCanvas.scss";

import Placeholder from "../Projects/Placeholder/Placeholder";
import Subscribe from "../Projects/Subscribe/Subscribe";
import PricingCard from "../Projects/PricingCard/PricingCard";
import NavigationCard from "../Projects/NavigationCard/NavigationCard";
import LoginCard from "../Projects/LoginCard/LoginCard";
import BlogCards from "../Projects/BlogCards/BlogCards";
import FeedbackComponents from "../Projects/FeedbackComponents/FeedbackComponents";

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    Subscribe: Subscribe,
    PricingCard: PricingCard,
    NavigationCard: NavigationCard,
    LoginCard: LoginCard,
    BlogCards: BlogCards,
    FeedbackComponents: FeedbackComponents,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent />;
  }

  return (
    <div className="canvas">
      {!activeProject ? <Placeholder /> : Comp(activeProject)}
    </div>
  );
}
