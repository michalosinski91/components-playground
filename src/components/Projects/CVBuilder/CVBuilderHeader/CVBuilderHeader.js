import React from "react";
import "./CVBuilderHeader.scss";

export default function CVBuilderHeader({ section }) {
  return (
    <div className="cv-builder-header">
      <h2>{section ? section.titlePrimary : ""}</h2>
      <p>{section ? section.titleSecondary : ""}</p>
    </div>
  );
}
