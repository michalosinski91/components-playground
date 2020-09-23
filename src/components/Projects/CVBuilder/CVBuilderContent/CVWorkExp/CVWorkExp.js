import React, { useState } from "react";
import "./CVWorkExp.scss";

import CVNavContainer from "../../CVNavContainer/CVNavContainer";
import CVBuilderBtn from "../../CVBuilderBtn/CVBuilderBtn";

export default function CVWorkExp({
  section,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  sections,
  workExp,
  setWorkExp,
}) {
  const [experience, setExperience] = useState(workExp);

  function handleValueChange(target) {
    setExperience(target.value);
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
    setWorkExp(experience);
    nextSection(activeSection);
  }

  function handleReturn() {
    prevSection(activeSection);
  }

  return (
    <div className="cv-work-exp">
      <div className="cv-work-exp__slider-container">
        <input
          className="cv-work-exp__slider"
          type="range"
          min="0"
          max="10"
          value={experience}
          step="1"
          list="range-list"
          id="exp-range"
          onChange={({ target }) => handleValueChange(target)}
        />
        <datalist id="range-list">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </datalist>
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
