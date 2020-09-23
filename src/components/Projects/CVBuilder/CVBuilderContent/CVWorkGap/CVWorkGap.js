import React, { useState } from "react";
import "./CVWorkGap.scss";
import CVWorkGapItem from "./CVWorkGapItem/CVWorkGapItem";

import CVNavContainer from "../../CVNavContainer/CVNavContainer";
import CVBuilderBtn from "../../CVBuilderBtn/CVBuilderBtn";

export default function CVWorkGap({
  workGap,
  setWorkGap,
  section,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  sections,
}) {
  const [selectedReasons, setSelectedReasons] = useState(workGap);

  const reasons = [
    "Education",
    "Relocation",
    "Sabbatical",
    "Laid off",
    "Travel",
    "Taking care of dependants",
  ];

  function isReasonSelected(reason) {
    return selectedReasons.includes(reason);
  }

  function addReason(reason) {
    const newArr = [...selectedReasons, reason];
    setSelectedReasons(newArr);
  }

  function removeReason(reason) {
    const newArr = selectedReasons.filter(
      (selectedReason) => selectedReason != reason
    );
    setSelectedReasons(newArr);
  }

  function handleSelectReason(reason) {
    isReasonSelected(reason) ? removeReason(reason) : addReason(reason);
  }

  function nextSection(id) {
    if (id < sections.length) {
      setProgress(progress + section.value);
      setActiveSection(id + 1);
    }
  }

  function handleContinue() {
    setWorkGap(selectedReasons);
  }

  return (
    <div className="cv-work-gap">
      <div className="cv-work-gap__container">
        {reasons.map((reason) => (
          <CVWorkGapItem
            key={reason}
            reason={reason}
            handleSelectReason={handleSelectReason}
            active={isReasonSelected(reason)}
          />
        ))}
      </div>

      <CVNavContainer>
        <button onClick={() => handleContinue()}>Continue</button>
        <CVBuilderBtn
          action="back"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          progress={progress}
          setProgress={setProgress}
          section={section}
          sections={sections}
        />
      </CVNavContainer>
    </div>
  );
}
