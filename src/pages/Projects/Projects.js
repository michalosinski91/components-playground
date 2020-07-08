import React from "react";
import "./Projects.scss";
import ProjectsSidebar from "../../components/ProjectsSidebar/ProjectsSidebar";
import ProjectsCanvas from "../../components/ProjectsCanvas/ProjectsCanvas";

export default function Projects() {
  return (
    <div className="projects">
      <ProjectsSidebar />
      <ProjectsCanvas />
    </div>
  );
}
