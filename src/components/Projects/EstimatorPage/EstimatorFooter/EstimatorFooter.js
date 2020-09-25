import React from "react";
import "./EstimatorFooter.scss";

export default function EstimatorFooter() {
  return (
    <div className="estimator-footer">
      <button className="estimator-footer__btn estimator-footer__btn--nofill">
        Go back
      </button>
      <button className="estimator-footer__btn estimator-footer__btn--fill">
        Go to next step
      </button>
    </div>
  );
}
