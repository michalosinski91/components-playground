import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({
  action,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  section,
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
      const prevSection = sections.filter((section) => section.id == id - 1)[0];
      setActiveSection(id - 1);
      setProgress(progress - prevSection.value);
    }
  }

  return (
    <>
      {action == "continue" ? (
        <button className="cv-builer-button cv-builer-button--fill">
          Continue <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      ) : (
        <button
          className="cv-builer-button cv-builer-button--nofill"
          onClick={() => prevSection(activeSection)}
        >
          <i className="fas fa-long-arrow-alt-left"></i> Back
        </button>
      )}
    </>
  );
}
