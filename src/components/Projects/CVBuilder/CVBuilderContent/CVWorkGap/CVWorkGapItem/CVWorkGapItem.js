import React from "react";
import "./CVWorkGapItem.scss";

export default function CVWorkGapItem({ reason, active, handleSelectReason }) {
  return (
    <div
      className={
        active ? "cv-workgap-item cv-workgap-item--active" : "cv-workgap-item"
      }
      onClick={() => handleSelectReason(reason)}
    >
      <p>{reason}</p>
      <i className="fas fa-check-circle"></i>
    </div>
  );
}
