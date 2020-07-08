import React from "react";
import "./ProjectsSidebarItem.scss";

export default function ProjectsSidebarItem({
  label,
  activeProject,
  setActiveProject,
}) {
  return (
    <div
      className={
        activeProject == label
          ? "projects-sidebar-item projects-sidebar-item--active"
          : "projects-sidebar-item"
      }
      onClick={() => setActiveProject(label)}
    >
      <p>{label}</p>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
}
