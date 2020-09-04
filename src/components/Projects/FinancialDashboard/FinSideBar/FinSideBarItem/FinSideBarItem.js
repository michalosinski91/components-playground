import React from "react";
import "./FinSideBarItem.scss";
export default function FinSideBarItem({ option, activeTab }) {
  return (
    <div
      className={
        activeTab == option.description
          ? "fin-sidebar-item fin-sidebar-item--active"
          : "fin-sidebar-item"
      }
    >
      <i className={option.icon}></i>
    </div>
  );
}
