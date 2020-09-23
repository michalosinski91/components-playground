import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({
  fill,
  direction,
  text,
  action,
  disabled,
}) {
  return (
    <button
      className={
        disabled
          ? "cv-builder-button cv-builder-button--disabled"
          : fill
          ? "cv-builder-button cv-builder-button--fill"
          : "cv-builder-button cv-builder-button--nofill"
      }
      onClick={disabled ? null : action ? () => action() : null}
    >
      {text}
      <i className={`fas fa-long-arrow-alt-${direction}`}></i>
    </button>
  );
}
