import React, { useState, useEffect, useRef } from "react";
import "./CVProgressBarContainer.scss";
import CountUp from "react-countup";

import CVProgressBar from "./CVProgressBar/CVProgressBar";

export default function CVProgressBarContainer({
  progress,
  sections,
  activeSection,
  prevActiveSection,
}) {
  const [startVal, setStartVal] = useState(progress);
  const [endVal, setEndVal] = useState(progress);
  const [renderCount, setRenderCount] = useState(0);
  const countupRef = useRef(null);

  function increase() {
    const newStartVal = endVal;
    const newEndVal =
      sections.filter((section) => section.id == activeSection - 1)[0].value +
      newStartVal;
    setStartVal(newStartVal);
    setEndVal(newEndVal);
  }

  function decrease() {
    const newStartVal = endVal;
    const activeItem = sections.filter(
      (section) => section.id == activeSection
    )[0];
    if (!activeItem) {
      setEndVal(0);
    }
    const newEndVal = newStartVal - activeItem.value;
    setStartVal(newStartVal);
    setEndVal(newEndVal);
  }

  useEffect(() => {
    setRenderCount(renderCount + 1);

    if (renderCount > 0) {
      activeSection > prevActiveSection ? increase() : decrease();
    }
  }, [activeSection]);

  return (
    <div className="cv-progress-bar-container">
      <CVProgressBar progress={progress} />
      <CountUp
        className="cv-progress-bar-container__countup"
        start={startVal}
        end={endVal}
        suffix="%"
        ref={countupRef}
      />
    </div>
  );
}
