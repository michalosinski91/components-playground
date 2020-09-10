import React from "react";
import "./CVBuilderAside.scss";
import CVProgressBarContainer from "./CVProgressBarContainer/CVProgressBarContainer";
import CVProgressNav from "./CVProgressNav/CVProgressNav";

export default function CVBuilderAside({
  sections,
  section,
  progress,
  activeSection,
  prevActiveSection,
}) {
  return (
    <div className="cv-builder-aside">
      <h3>My Progress</h3>
      <CVProgressBarContainer
        progress={progress}
        sections={sections}
        activeSection={activeSection}
        prevActiveSection={prevActiveSection}
      />
      <div className="cv-builder-aside__section-details">
        <h4>{section.name}</h4>
        <p>
          Complete and Get <span>+{section.value}%</span>
        </p>
      </div>
      <CVProgressNav sections={sections} activeSection={activeSection} />
    </div>
  );
}
