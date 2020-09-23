import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (topStrengths.length) {
      console.log(topStrengths);
    }
  }, [topStrengths]);

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

  function handleContinue() {
    setTopStrengths(selectedStrengths);
    nextSection(activeSection);
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
