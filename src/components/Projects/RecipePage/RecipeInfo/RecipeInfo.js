import React from "react";
import "./RecipeInfo.scss";

export default function RecipeInfo() {
  return (
    <div className="recipe-info">
      <div className="recipe-info__item">
        <i className="far fa-clock fa-2x"></i>
        <p>30 min</p>
      </div>
      <div className="recipe-info__item">
        <i className="fas fa-chart-pie fa-2x"></i>
        <p>6 servings</p>
      </div>
      <div className="recipe-info__item">
        <i className="fas fa-battery-half fa-2x"></i>
        <p>210 cals</p>
      </div>
    </div>
  );
}
