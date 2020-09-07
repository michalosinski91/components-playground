import React, { useState } from "react";
import "./ProjectsSidebar.scss";
import ProjectsSidebarItem from "./ProjectsSidebarItem/ProjectsSidebarItem";

export default function ProjectsSidebar({
  projects,
  activeProject,
  setActiveProject,
}) {
  const [closeSidebar, setCloseSidebar] = useState(false);

  return (
    <div
      className={
        closeSidebar
          ? "projects-sidebar projects-sidebar--close"
          : "projects-sidebar"
      }
    >
      <div
        className={
          closeSidebar
            ? "projects-sidebar__container projects-sidebar__container--close"
            : "projects-sidebar__container"
        }
      >
        {projects.map((project) => (
          <ProjectsSidebarItem
            key={project}
            label={project}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            closeSidebar={closeSidebar}
            setCloseSidebar={setCloseSidebar}
          />
        ))}
      </div>
      <div
        className="projects-sidebar__toggle"
        onClick={() => setCloseSidebar(!closeSidebar)}
      >
        <i
          className={
            closeSidebar
              ? "fas fa-angle-double-right fa-2x"
              : "fas fa-angle-double-left fa-2x"
          }
        ></i>
      </div>
    </div>
  );
}
