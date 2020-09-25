import React from "react";

export default function EstimatorSummaryQuote({ total }) {
  return (
    <div className="estimator-summary__quote">
      <div className="estimator-summary__quote-heading">
        <h4>Estimated Total</h4>
        <p>FROM</p>
      </div>
      <div className="estimator-summary__quote-price">{total}</div>
    </div>
  );
}
