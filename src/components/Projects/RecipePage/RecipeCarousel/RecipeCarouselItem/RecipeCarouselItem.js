import React from "react";

export default function RecipeCarouselItem({ item }) {
  return (
    <div className="recipe-carousel__item">
      <img src={item.photo} alt={item.name} />
      <div className="recipe-carousel__item-name">{item.name}</div>
    </div>
  );
}
