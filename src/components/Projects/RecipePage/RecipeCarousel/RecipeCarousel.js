import React, { useState, useRef } from "react";
import "./RecipeCarousel.scss";

import RecipeCarouselItem from "./RecipeCarouselItem/RecipeCarouselItem";

export default function RecipeCarousel({ items }) {
  const [lastVisibleItemIndex, setLastVisibleItemIndex] = useState(3);
  const photoFrame = useRef(null);
  const visibleItems = 3;

  function moveRight() {
    if (lastVisibleItemIndex + 1 > items.length) {
      movePhoto(visibleItems);
      return;
    }
    const newIndex = lastVisibleItemIndex + 1;
    movePhoto(newIndex);
  }

  function moveLeft() {
    if (lastVisibleItemIndex - 1 < visibleItems) {
      movePhoto(items.length);
      return;
    }
    const newIndex = lastVisibleItemIndex - 1;
    movePhoto(newIndex);
  }

  function movePhoto(index) {
    const moveBy = -152 * (index - visibleItems);
    setLastVisibleItemIndex(index);
    photoFrame.current.style.transform = `translateX(${moveBy}px)`;
  }

  return (
    <div className="recipe-carousel">
      <i className="fas fa-chevron-left fa-2x" onClick={() => moveLeft()}></i>
      <div className="recipe-carousel__container">
        <div ref={photoFrame} className="recipe-carousel__photo-frame">
          {items.map((item, index) => (
            <RecipeCarouselItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
      <i className="fas fa-chevron-right fa-2x" onClick={() => moveRight()}></i>
    </div>
  );
}
