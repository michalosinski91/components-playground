import React, { useState } from "react";
import "./RecipeSummary.scss";

export default function RecipeSummary({ recipe }) {
  const [liked, setLiked] = useState(false);

  function formatReviewCount(count) {
    return Math.abs(count) > 999
      ? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + "k"
      : Math.sign(count) * Math.abs(count);
  }

  function Star({ id }) {
    return (
      <i
        className={
          id <= recipe.rating
            ? "recipe-summary__icon recipe-summary__icon--red fas fa-star fa-lg"
            : "recipe-summary__icon fas fa-star fa-lg"
        }
      ></i>
    );
  }

  return (
    <div className="recipe-summary">
      <img
        className="recipe-summary__photo"
        src={recipe.photo}
        alt={recipe.title}
      />
      <div className="recipe-summary__content">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-summary__rating-container">
          <div className="recipe-summary__rating">
            <Star id={1} />
            <Star id={2} />
            <Star id={3} />
            <Star id={4} />
            <Star id={5} />
          </div>
          <p>{formatReviewCount(recipe.reviewCount)}</p>
        </div>
      </div>
      <i
        className={liked ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}
        onClick={() => setLiked(!liked)}
      ></i>
    </div>
  );
}
