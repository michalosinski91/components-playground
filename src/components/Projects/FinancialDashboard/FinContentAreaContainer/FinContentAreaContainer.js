import React from "react";
import "./FinContentAreaContainer.scss";
import FinContentContainer from "../FinContentContainer/FinContentContainer";
import FinActivityComponent from "../FinActivityComponent/FinActivityComponent";

export default function FinContentAreaContainer() {
  return (
    <div className="fin-content-area-container">
      <div className="fin-content-area-container__main">
        <FinContentContainer />
        <FinContentContainer wide={true} />
        <FinContentContainer />
        <FinContentContainer wide={true} />
      </div>
      <FinActivityComponent />
    </div>
  );
}
