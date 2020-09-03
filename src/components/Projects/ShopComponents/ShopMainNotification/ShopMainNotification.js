import React from "react";
import "./ShopMainNotification.scss";

export default function ShopMainNotification({ title, text, icon }) {
  return (
    <div className="shop-main-notification">
      {icon ? (
        <img className="shop-main-notification__image" src={icon} />
      ) : null}
      <div className="shop-main-notification__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="shop-main-notification__icon">
        <i className="fas fa-chevron-right fa-2x"></i>
      </div>
    </div>
  );
}
