import React, { useState } from "react";
import "./CVWorkGap.scss";
import CVWorkGapItem from "./CVWorkGapItem/CVWorkGapItem";

export default function CVWorkGap() {
  const [selectedReasons, setSelectedReasons] = useState(["Sabbatical"]);

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

  return (
    <div className="cv-work-gap">
      {reasons.map((reason) => (
        <CVWorkGapItem
          key={reason}
          reason={reason}
          handleSelectReason={handleSelectReason}
          active={isReasonSelected(reason)}
        />
      ))}
    </div>
  );
}
