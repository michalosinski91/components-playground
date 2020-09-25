import React from "react";

export default function EstimatorNavItem({ id, text, active }) {
  return (
    <div
      className={
        active
          ? "estimator-nav__item estimator-nav__item--active"
          : "estimator-nav__item"
      }
    >
      <span>{id}</span>
      <p>{text}</p>
    </div>
  );
}
