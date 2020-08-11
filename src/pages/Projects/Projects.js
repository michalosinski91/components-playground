import React, { useState } from "react";
import "./Projects.scss";
import ProjectsSidebar from "../../components/ProjectsSidebar/ProjectsSidebar";
import ProjectsCanvas from "../../components/ProjectsCanvas/ProjectsCanvas";

export default function Projects() {
  const mockProjects = [
    "TestComp",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ];
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className="projects">
      <ProjectsSidebar
        mockProjects={mockProjects}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <ProjectsCanvas activeProject={activeProject} />
    </div>
  );
}
