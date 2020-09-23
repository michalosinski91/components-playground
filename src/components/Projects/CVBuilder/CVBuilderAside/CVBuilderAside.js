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
  function getPrevSectionDetails(prop) {
    const prevSection = sections.filter(
      (section) => section.id == prevActiveSection
    )[0];

    return prevSection ? prevSection[prop] : null;
  }
  return (
    <div className="cv-builder-aside">
      <div
        className={
          progress < 100
            ? "cv-builder-aside__container"
            : "cv-builder-aside__container cv-builder-aside__container--hidden"
        }
      >
        <h3>My Progress</h3>
        <CVProgressBarContainer
          progress={progress}
          sections={sections}
          activeSection={activeSection}
          prevActiveSection={prevActiveSection}
        />
        <div className="cv-builder-aside__section-details">
          <h4>{section ? section.name : getPrevSectionDetails("name")}</h4>
          <p>
            Complete and Get{" "}
            <span>
              +{section ? section.value : getPrevSectionDetails("value")}%
            </span>
          </p>
        </div>
        <CVProgressNav sections={sections} activeSection={activeSection} />
      </div>
    </div>
  );
}
