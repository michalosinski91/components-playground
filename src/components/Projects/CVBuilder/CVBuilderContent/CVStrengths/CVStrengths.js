import React, { useState } from "react";
import "./CVStrengths.scss";
import CVStrengthsItem from "./CVStrengthsItem/CVStrengthsItem";

import CVNavContainer from "../../CVNavContainer/CVNavContainer";
import CVBuilderBtn from "../../CVBuilderBtn/CVBuilderBtn";

export default function CVStrengths() {
  const [selectedStrengths, setSelectedStrengths] = useState([]);
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
        <CVBuilderBtn action="continue" />
        <CVBuilderBtn action="back" />
      </CVNavContainer>
    </div>
  );
}
