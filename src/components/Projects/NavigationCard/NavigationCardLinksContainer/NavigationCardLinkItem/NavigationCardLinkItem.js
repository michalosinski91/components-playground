import React from "react";
import "./NavigationCardLinkItem.scss";

export default function NavigationCardLinkItem({
  item,
  activeLink,
  setActiveLink,
}) {
  return (
    <div
      className={
        item.id == activeLink ? "nav-item nav-item--active" : "nav-item"
      }
      onClick={() => setActiveLink(item.id)}
    >
      <div className="nav-item__icon-container">
        <i className={item.icon}></i>
      </div>
      <h4 className="nav-item__heading">{item.name}</h4>
      <p className="nav-item__text">{item.text}</p>
    </div>
  );
}
