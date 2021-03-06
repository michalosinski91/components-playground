import React, { useState } from "react";
import "./Projects.scss";

import ProjectsSidebar from "../../components/ProjectsSidebar/ProjectsSidebar";
import ProjectsCanvas from "../../components/ProjectsCanvas/ProjectsCanvas";

export default function Projects() {
  const projects = [
    "Subscribe",
    "PricingCard",
    "NavigationCard",
    "LoginCard",
    "BlogCards",
    "FeedbackComponents",
    "ShopComponents",
    "FinancialDashboard",
    "FAQAccordion",
    "CVBuilder",
    "EstimatorPage",
    "RecipePage",
    "RatingComponents",
    "ProfileCards",
  ];
  const [activeProject, setActiveProject] = useState("ProfileCards");
  return (
    <div className="projects" key="projects">
      <ProjectsSidebar
        projects={projects}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <ProjectsCanvas activeProject={activeProject} />
    </div>
  );
}
