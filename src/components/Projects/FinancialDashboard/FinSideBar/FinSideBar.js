import React, { useState } from "react";
import "./FinSideBar.scss";

import FinSideBarItem from "./FinSideBarItem/FinSideBarItem";

export default function FinSideBar() {
  const [activeTab, setActiveTab] = useState("Home");
  const options = [
    {
      id: 1,
      description: "Home",
      icon: "fas fa-home fa-2x",
    },
    {
      id: 2,
      description: "Clients",
      icon: "fas fa-users fa-2x",
    },
    {
      id: 3,
      description: "Payments",
      icon: "fas fa-file-invoice-dollar fa-2x",
    },
    {
      id: 4,
      description: "Products",
      icon: "fas fa-tags fa-2x",
    },
  ];
  return (
    <div className="fin-side-bar">
      {options.map((option) => (
        <FinSideBarItem key={option.id} option={option} activeTab={activeTab} />
      ))}
    </div>
  );
}
