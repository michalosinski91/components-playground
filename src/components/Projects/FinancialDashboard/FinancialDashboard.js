import React from "react";
import "./FinancialDashboard.scss";

import FinTopBar from "./FinTopBar/FinTopBar";
import FinSideBar from "./FinSideBar/FinSideBar";
import FinHeader from "./FinHeader/FinHeader";
import FinContentAreaContainer from "./FinContentAreaContainer/FinContentAreaContainer";

export default function FinancialDashboard() {
  return (
    <div className="financial-dashboard">
      <FinTopBar />
      <FinSideBar />
      <FinHeader />
      <FinContentAreaContainer />
    </div>
  );
}
