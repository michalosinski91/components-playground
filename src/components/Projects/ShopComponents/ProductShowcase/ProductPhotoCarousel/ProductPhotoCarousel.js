import React, { useState, useRef } from "react";
import "./ProductPhotoCarousel.scss";

export default function ProductPhotoCarousel({ photos }) {
  const [favorite, setFavorite] = useState(false);
  const [activePhoto, setActivePhoto] = useState(1);
  const photoFrame = useRef(null);

  function movePhotos(photoID) {
    const moveBy = -400 * (photoID - 1);
    setActivePhoto(photoID);
    photoFrame.current.style.transform = `translateX(${moveBy}px)`;
  }

  return (
    <div className="product-photo-carousel">
      <div
        className="product-photo-carousel__icon"
        onClick={() => setFavorite(!favorite)}
      >
        <i
          className={favorite ? "fas fa-heart fa-2x" : "far fa-heart fa-2x"}
        ></i>
      </div>
      <div className="product-photo-carousel__photo-container">
        <div ref={photoFrame} className="product-photo-carousel__photo-frame">
          {photos.map((photo) => (
            <img
              key={photo.id}
              className="product-photo-carousel__photo"
              src={photo.src}
              alt={photo.description}
            />
          ))}
        </div>
      </div>

      <div className="product-photo-carousel__slider">
        {photos.map((photo) => (
          <div
            className={
              activePhoto == photo.id
                ? "product-photo-carousel__slider-item product-photo-carousel__slider-item--active"
                : "product-photo-carousel__slider-item"
            }
            key={photo.id}
            onClick={() => movePhotos(photo.id)}
          ></div>
        ))}
      </div>
    </div>
  );
}
