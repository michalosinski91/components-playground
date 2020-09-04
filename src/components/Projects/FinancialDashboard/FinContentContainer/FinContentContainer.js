import React from "react";
import "./FinContentContainer.scss";

export default function FinContentContainer(props) {
  return (
    <div
      className={
        props.wide
          ? "fin-content-container fin-content-container--wide"
          : "fin-content-container"
      }
    >
      ContentContainer
    </div>
  );
}
