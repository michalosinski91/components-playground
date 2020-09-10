import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({
  type,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  section,
  prevActiveSection,
  sections,
}) {
  function nextSection(id) {
    if (id < sections.length) {
      setProgress(progress + section.value);
      setActiveSection(id + 1);
    }
  }

  function prevSection(id) {
    if (id > 1) {
      const prevSectionVal = sections.filter(
        (section) => section.id == prevActiveSection
      )[0].value;
      setProgress(progress - prevSectionVal);
      setActiveSection(activeSection - 1);
    }
  }

  return (
    <>
      {type == "continue" ? (
        <button
          className="cv-builer-button__continue"
          onClick={() => nextSection(activeSection)}
        >
          Continue <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      ) : (
        <button
          className="cv-builder-button__back"
          onClick={() => prevSection(activeSection)}
        >
          <i className="fas fa-long-arrow-alt-left"></i> Back
        </button>
      )}
    </>
  );
}
