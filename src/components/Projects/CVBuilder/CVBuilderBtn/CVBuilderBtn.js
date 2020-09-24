import React from "react";
import "./CVBuilderBtn.scss";

export default function CVBuilderBtn({ fill, icon, text, action, disabled }) {
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
      {icon ? <i className={icon}></i> : null}
    </button>
  );
}
