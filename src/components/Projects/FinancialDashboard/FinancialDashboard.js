import React from "react";
import "./FinancialDashboard.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import FinTopBar from "./FinTopBar/FinTopBar";
import FinSideBar from "./FinSideBar/FinSideBar";
import FinHeader from "./FinHeader/FinHeader";
import FinContentAreaContainer from "./FinContentAreaContainer/FinContentAreaContainer";

export default function FinancialDashboard() {
  return (
    <ProjectChangeAnimation>
      <div className="financial-dashboard">
        <FinTopBar />
        <FinSideBar />
        <FinHeader />
        <FinContentAreaContainer />
      </div>
    </ProjectChangeAnimation>
  );
}
