import React from "react";
import "./CVStrengthsItem.scss";

export default function CVStrengthsItem({
  strength,
  active,
  handleSelectStrength,
}) {
  return (
    <div
      className={
        active
          ? "cv-strengths-item cv-strengths-item--active"
          : "cv-strengths-item"
      }
      onClick={() => handleSelectStrength(strength)}
    >
      <div className="cv-strengths-item__icon-container">
        <i className="fas fa-check"></i>
      </div>
      <p>{strength}</p>
    </div>
  );
}
