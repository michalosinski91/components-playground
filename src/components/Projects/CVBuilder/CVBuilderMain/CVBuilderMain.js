import React from "react";
import "./CVBuilderMain.scss";

import CVBuilderHeader from "../CVBuilderHeader/CVBuilderHeader";
import CVBuilderContent from "../CVBuilderContent/CVBuilderContent";
import CVBuilderBtn from "../CVBuilderBtn/CVBuilderBtn";

export default function CVBuilderMain({
  section,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  prevActiveSection,
  sections,
  prevProgress,
}) {
  return (
    <div className="cv-builder-main">
      <CVBuilderHeader section={section} />
      <CVBuilderContent section={section} />
      <div className="cv-builder-main__nav">
        <CVBuilderBtn
          type="back"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          progress={progress}
          setProgress={setProgress}
          section={section}
          prevActiveSection={prevActiveSection}
          sections={sections}
        />
        <CVBuilderBtn
          type="continue"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          progress={progress}
          setProgress={setProgress}
          section={section}
          prevActiveSection={prevActiveSection}
          sections={sections}
        />
      </div>
    </div>
  );
}
