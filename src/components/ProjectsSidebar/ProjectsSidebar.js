import React from "react";
import "./ProjectsSidebar.scss";
import ProjectsSidebarItem from "./ProjectsSidebarItem/ProjectsSidebarItem";

export default function ProjectsSidebar({
  projects,
  activeProject,
  setActiveProject,
}) {
  return (
    <div className="projects-sidebar">
      {projects.map((project) => (
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
