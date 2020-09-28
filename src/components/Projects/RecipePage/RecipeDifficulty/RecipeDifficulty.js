import React from "react";
import "./RecipeDifficulty.scss";

export default function RecipeDifficulty() {
  return (
    <div className="recipe-difficulty">
      <h4>Difficulty</h4>
      <div className="recipe-difficulty__container">
        <div className="recipe-difficulty__item">Easy</div>
        <div className="recipe-difficulty__item recipe-difficulty__item--active">
          Medium
        </div>
        <div className="recipe-difficulty__item">Hard</div>
      </div>
    </div>
  );
}
