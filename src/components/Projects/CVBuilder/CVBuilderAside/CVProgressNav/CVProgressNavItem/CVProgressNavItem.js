import React from "react";
import "./CVProgressNavItem.scss";

export default function CVProgressNavItem({ item, activeSection }) {
  if (item.id == activeSection) {
    return (
      <div className="cv-progress-nav-item">
        <div className="cv-progress-nav-item__stage cv-progress-nav-item__stage--active">
          <p>{item.id}</p>
        </div>
        <p className="cv-progress-nav-item__name cv-progress-nav-item__name--active">
          {item.shortName}
        </p>
      </div>
    );
  }

  if (item.id < activeSection) {
    return (
      <div className="cv-progress-nav-item">
        <div className="cv-progress-nav-item__stage cv-progress-nav-item__stage--completed">
          <p>{item.id}</p>
        </div>
        <p className="cv-progress-nav-item__name cv-progress-nav-item__name--completed">
          {item.shortName}
        </p>
      </div>
    );
  }
  return (
    <div className="cv-progress-nav-item">
      <div className="cv-progress-nav-item__stage">
        <p>{item.id}</p>
      </div>
      <p className={"cv-progress-nav-item__name"}>{item.shortName}</p>
    </div>
  );
}
