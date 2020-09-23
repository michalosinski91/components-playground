import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({ fill, direction, text, action }) {
  return (
    <button
      className={
        fill
          ? "cv-builer-button cv-builer-button--fill"
          : "cv-builer-button cv-builer-button--nofill"
      }
      onClick={action ? () => action() : null}
    >
      {text}
      <i className={`fas fa-long-arrow-alt-${direction}`}></i>
    </button>
  );
}
