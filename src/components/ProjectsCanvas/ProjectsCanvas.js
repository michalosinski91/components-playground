import React from "react";
import "./ProjectsCanvas.scss";

import Placeholder from "../Projects/Placeholder/Placeholder";
import TestComp from "../Projects/TestComp/TestComp";

export default function ProjectsCanvas({ activeProject }) {
  const components = {
    TestComp: TestComp,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent />;
  }

  return (
    <div className="canvas">
      <div className="canvas-container">
        {!activeProject ? <Placeholder /> : Comp(activeProject)}
      </div>
    </div>
  );
}
