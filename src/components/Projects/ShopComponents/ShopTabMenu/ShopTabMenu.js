import React, { useState } from "react";
import "./ShopTabMenu.scss";
import ShopTabItem from "./ShopTabItem/ShopTabItem";

export default function ShopTabMenu() {
  const [activeTab, setActiveTab] = useState("Woman");
  return (
    <div className="shop-tab-menu">
      <ShopTabItem
        title="Woman"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ShopTabItem
        title="Man"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ShopTabItem
        title="Kids"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
