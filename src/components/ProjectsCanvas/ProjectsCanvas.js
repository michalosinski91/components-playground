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

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    Subscribe: Subscribe,
    PricingCard: PricingCard,
    NavigationCard: NavigationCard,
    LoginCard: LoginCard,
    BlogCards: BlogCards,
    FeedbackComponents: FeedbackComponents,
    ShopComponents: ShopComponents,
    FinancialDashboard: FinancialDashboard,
    FAQAccordion: FAQAccordion,
    CVBuilder: CVBuilder,
    EstimatorPage: EstimatorPage,
    RecipePage: RecipePage,
    RatingComponents: RatingComponents,
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
