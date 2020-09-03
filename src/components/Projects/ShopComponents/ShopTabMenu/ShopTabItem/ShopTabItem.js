import React from "react";
import "./ShopTabItem.scss";

export default function ShopTabItem({ title, activeTab, setActiveTab }) {
  return (
    <div
      className={
        activeTab == title
          ? "shop-tab-item shop-tab-item--active"
          : "shop-tab-item"
      }
      onClick={() => setActiveTab(title)}
    >
      {title}
    </div>
  );
}
