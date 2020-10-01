import React, { useState } from "react";
import "./RatingProduct.scss";

import RatingBtn from "../RatingBtn/RatingBtn";
import RatingLink from "../RatingLink/RatingLink";

import productLogo from "../../../../assets/svg/collaboration.svg";

export default function RatingProduct() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="rating-product">
      <div className="rating-product__image">
        <img src={productLogo} />
      </div>
      <div className="rating-product__details">
        <h2 className="rating-product__title">Online collaborative platform</h2>
        <i
          onClick={() => setLiked(!liked)}
          className={
            liked
              ? "rating-product__like-icon fas fa-heart fa-2x"
              : "rating-product__like-icon far fa-heart fa-2x"
          }
        ></i>
        <div className="rating-product__owner-details-container">
          <p>Company Inc</p>
          <i className="fas fa-circle fa-xs"></i>
          <p className="blue-text">Business</p>
        </div>
        <p className="rating-product__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <RatingBtn text="Get Product" />
        <RatingLink text="Get system requirements" link="#" />
      </div>
    </div>
  );
}
