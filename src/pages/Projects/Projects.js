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
  ];
  const [activeProject, setActiveProject] = useState("ShopComponents");
  return (
    <div className="projects">
      <ProjectsSidebar
        projects={projects}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <ProjectsCanvas activeProject={activeProject} />
    </div>
  );
}
