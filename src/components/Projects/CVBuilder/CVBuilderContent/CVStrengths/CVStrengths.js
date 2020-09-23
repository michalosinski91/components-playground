import React, { useState } from "react";
import "./CVStrengths.scss";
import CVStrengthsItem from "./CVStrengthsItem/CVStrengthsItem";

import CVNavContainer from "../../CVNavContainer/CVNavContainer";
import CVBuilderBtn from "../../CVBuilderBtn/CVBuilderBtn";

export default function CVStrengths({
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  section,
  sections,
  topStrengths,
  setTopStrengths,
}) {
  const [selectedStrengths, setSelectedStrengths] = useState(topStrengths);
  const strengths = [
    "Collaboration",
    "Communication",
    "Teamwork",
    "Delegation",
    "Customer service",
    "Innovation",
    "Decision-making",
    "Leadership",
    "Interpersonal",
    "Planning",
    "Motivation",
    "Critical thinking",
  ];

  function isStrengthActive(strength) {
    return selectedStrengths.includes(strength);
  }

  function handleRemoveStrength(strength) {
    const newArr = selectedStrengths.filter(
      (selectedStrength) => selectedStrength != strength
    );
    setSelectedStrengths(newArr);
  }

  function handleAddStrength(strength) {
    const newArr = [...selectedStrengths, strength];
    return selectedStrengths.length < 3 ? setSelectedStrengths(newArr) : null;
  }

  function handleSelectStrength(strength) {
    isStrengthActive(strength)
      ? handleRemoveStrength(strength)
      : handleAddStrength(strength);
  }

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

  function handleContinue() {
    setTopStrengths(selectedStrengths);
    nextSection(activeSection);
  }

  function handleReturn() {
    prevSection(activeSection);
  }

  return (
    <div className="cv-strengths">
      <div className="cv-strengths__container">
        {strengths.map((strength) => (
          <CVStrengthsItem
            key={strength}
            strength={strength}
            handleSelectStrength={handleSelectStrength}
            active={isStrengthActive(strength)}
          />
        ))}
      </div>
      <CVNavContainer>
        <CVBuilderBtn
          fill={true}
          direction={"right"}
          text={"Continue"}
          action={handleContinue}
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
