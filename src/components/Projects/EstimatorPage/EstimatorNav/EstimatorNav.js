import React from "react";
import "./EstimatorNav.scss";

import EstimatorNavItem from "./EstimatorNavItem/EstimatorNavItem";

export default function EstimatorNav() {
  return (
    <div className="estimator-nav">
      <div className="estimator-nav__container">
        <EstimatorNavItem key={1} id={1} text={"Pick services"} active={true} />
        <EstimatorNavItem
          key={2}
          id={2}
          text={"Specify scope"}
          active={false}
        />
        <EstimatorNavItem
          key={3}
          id={3}
          text={"Provide contact"}
          active={false}
        />
      </div>
      <button className="estimator-nav__button">Close</button>
    </div>
  );
}
