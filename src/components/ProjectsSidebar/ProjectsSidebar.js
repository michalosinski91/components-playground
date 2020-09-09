import React, { useState } from "react";
import "./ProjectsSidebar.scss";

import { motion } from "framer-motion";

import ProjectsSidebarItem from "./ProjectsSidebarItem/ProjectsSidebarItem";

export default function ProjectsSidebar({
  projects,
  activeProject,
  setActiveProject,
}) {
  const [closeSidebar, setCloseSidebar] = useState(false);

  return (
    <motion.div
      initial={{ translateX: -200 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: -200, transition: { delay: 0.25, duration: 1 } }}
      transition={{ duration: 1 }}
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
      <motion.div
        initial={{ translateX: -30 }}
        animate={{ translateX: 0, transition: { delay: 0.75, duration: 0.5 } }}
        exit={{ translateX: -30, transition: { duration: 0.5 } }}
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
      </motion.div>
    </motion.div>
  );
}
