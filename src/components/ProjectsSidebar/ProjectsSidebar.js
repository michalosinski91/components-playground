import React, { useState } from "react";
import "./ProjectsSidebar.scss";
import ProjectsSidebarItem from "./ProjectsSidebarItem/ProjectsSidebarItem";

export default function ProjectsSidebar() {
  const mockProjects = ["item1", "item2", "item3", "item4", "item5", "item6"];
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className="projects-sidebar">
      {mockProjects.map((project) => (
        <ProjectsSidebarItem
          key={project}
          label={project}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      ))}
    </div>
  );
}
