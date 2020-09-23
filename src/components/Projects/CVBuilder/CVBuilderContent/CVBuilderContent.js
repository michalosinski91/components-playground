import React from "react";
import "./CVBuilderContent.scss";

import CVContactForm from "./CVContactForm/CVContactForm";
import CVStrengths from "./CVStrengths/CVStrengths";
import CVWorkExp from "./CVWorkExp/CVWorkExp";
import CVWorkGap from "./CVWorkGap/CVWorkGap";

export default function CVBuilderContent({
  section,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  sections,
  contactDetails,
  setContactDetails,
  topStrengths,
  setTopStrengths,
  workExp,
  setWorkExp,
  workGap,
  setWorkGap,
}) {
  const components = {
    CVContactForm,
    CVStrengths,
    CVWorkExp,
    CVWorkGap,
  };

  function Comp(name) {
    const SpecificComponent = components[name];

    return (
      <SpecificComponent
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
        topStrengths={topStrengths}
        setTopStrengths={setTopStrengths}
        workExp={workExp}
        setWorkExp={setWorkExp}
        workGap={workGap}
        setWorkGap={setWorkGap}
        section={section}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        progress={progress}
        setProgress={setProgress}
        sections={sections}
      />
    );
  }

  return (
    <div className="cv-builder-content">
      {section ? Comp(section.component) : null}
    </div>
  );
}
