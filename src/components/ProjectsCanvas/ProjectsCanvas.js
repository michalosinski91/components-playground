import React from "react";
import "./ProjectsCanvas.scss";

import Placeholder from "../Projects/Placeholder/Placeholder";

export default function ProjectsCanvas() {
  return (
    <div className="canvas">
      <div className="canvas-container">
        <Placeholder />
      </div>
    </div>
  );
}

// 'Please select a project' component displayed initially until a selection made
