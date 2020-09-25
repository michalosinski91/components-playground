import React from "react";
import "./EstimatorPage.scss";
import EstimatorNav from "./EstimatorNav/EstimatorNav";
import EstimatorFooter from "./EstimatorFooter/EstimatorFooter";
import EstimatorPicker from "./EstimatorPicker/EstimatorPicker";

export default function EstimatorPage() {
  return (
    <div className="estimator">
      <div className="estimator__container">
        <EstimatorNav />
        <div className="estimator__content">
          <EstimatorPicker />
        </div>
        <EstimatorFooter />
      </div>
    </div>
  );
}
