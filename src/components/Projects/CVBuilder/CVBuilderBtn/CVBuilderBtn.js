import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({
  type,
  activeSection,
  setActiveSection,
}) {
  function nextSection(id) {
    if (id < 4) {
      setActiveSection(id + 1);
    }
  }

  function prevSection(id) {
    if (id > 1) {
      setActiveSection(id - 1);
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
