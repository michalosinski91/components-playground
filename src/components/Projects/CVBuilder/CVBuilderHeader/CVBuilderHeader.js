import React from "react";
import "./CVBuilderHeader.scss";

export default function CVBuilderHeader({ section }) {
  return (
    <div className="cv-builder-header">
      <h2>{section.titlePrimary}</h2>
      <p>{section.titleSecondary}</p>
    </div>
  );
}
