import React from "react";
import "./ShopSecondaryNotification.scss";

export default function ShopSecondaryNotification({ title, text }) {
  return (
    <div className="shop-secondary-notification">
      <div className="shop-secondary-notification__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="shop-secondary-notification__icon">
        <i className="fas fa-times fa-2x"></i>
      </div>
    </div>
  );
}
