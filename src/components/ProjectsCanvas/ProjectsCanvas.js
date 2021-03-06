import React from "react";
import "./ProjectsCanvas.scss";

import { motion } from "framer-motion";

import Placeholder from "../Projects/Placeholder/Placeholder";
import Subscribe from "../Projects/Subscribe/Subscribe";
import PricingCard from "../Projects/PricingCard/PricingCard";
import NavigationCard from "../Projects/NavigationCard/NavigationCard";
import LoginCard from "../Projects/LoginCard/LoginCard";
import BlogCards from "../Projects/BlogCards/BlogCards";
import FeedbackComponents from "../Projects/FeedbackComponents/FeedbackComponents";
import ShopComponents from "../Projects/ShopComponents/ShopComponents";
import FinancialDashboard from "../Projects/FinancialDashboard/FinancialDashboard";
import FAQAccordion from "../Projects/FAQAccordion/FAQAccordion";
import CVBuilder from "../Projects/CVBuilder/CVBuilder";
import EstimatorPage from "../Projects/EstimatorPage/EstimatorPage";
import RecipePage from "../Projects/RecipePage/RecipePage";
import RatingComponents from "../Projects/RatingComponents/RatingComponents";
import ProfileCards from "../Projects/ProfileCards/ProfileCards";

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    Subscribe,
    PricingCard,
    NavigationCard,
    LoginCard,
    BlogCards,
    FeedbackComponents,
    ShopComponents,
    FinancialDashboard,
    FAQAccordion,
    CVBuilder,
    EstimatorPage,
    RecipePage,
    RatingComponents,
    ProfileCards,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent />;
  }

  return (
    <motion.div
      initial={{ translateX: 1000 }}
      animate={{ translateX: 0, transition: { duration: 1.25 } }}
      exit={{ translateX: 1500, transition: { duration: 1.25 } }}
      className="canvas"
    >
      {!activeProject ? <Placeholder /> : Comp(activeProject)}
    </motion.div>
  );
}
