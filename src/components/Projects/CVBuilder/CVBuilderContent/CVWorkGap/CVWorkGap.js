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
    setActiveSection(id + 1);
    setProgress(progress + section.value);
  }

  function prevSection(id) {
    if (id > 1) {
      const prevSection = sections.filter((section) => section.id == id - 1)[0];
      setActiveSection(id - 1);
      setProgress(progress - prevSection.value);
    }
  }

  function handleContinue() {
    setWorkGap(selectedReasons);
    nextSection(activeSection);
  }

  function handleReturn() {
    prevSection(activeSection);
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
        <CVBuilderBtn
          fill={true}
          direction={"right"}
          text={"Continue"}
          action={handleContinue}
          disabled={false}
        />
        <CVBuilderBtn
          fill={false}
          direction={"left"}
          text={"Back"}
          action={handleReturn}
        />
      </CVNavContainer>
    </div>
  );
}
