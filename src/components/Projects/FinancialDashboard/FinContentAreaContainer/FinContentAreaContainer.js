import React from "react";
import "./FinContentAreaContainer.scss";
import FinContentContainer from "../FinContentContainer/FinContentContainer";
import FinActivityComponent from "../FinActivityComponent/FinActivityComponent";
import FinBarChart from "../FinBarChart/FinBarChart";
import FinPieChart from "../FinPieChart/FinPieChar";
import FinTable from "../FinTable/FinTable";

export default function FinContentAreaContainer() {
  const TopSelling = {
    title: "Top Selling Services/Products",
    data: [
      {
        id: 1,
        name: ".Net Consultancy Services",
        hourlyRate: "$25/hr",
        totalIncome: "$124200",
      },
      {
        id: 2,
        name: "Software Testing and QA",
        hourlyRate: "$10/hr",
        totalIncome: "$99600",
      },
      {
        id: 3,
        name: "UI/UX Design Services",
        hourlyRate: "$30/hr",
        totalIncome: "$72550",
      },
      {
        id: 4,
        name: "Mobile Application Development",
        hourlyRate: "$25/hr",
        totalIncome: "$64300",
      },
      {
        id: 5,
        name: "Art direction",
        hourlyRate: "$25/hr",
        totalIncome: "$23700",
      },
    ],
  };

  const TopCustomers = {
    title: "Top Paying Customers",
    data: [
      {
        id: 1,
        name: "Reactial",
        totalSpend: "$230700",
      },
      {
        id: 2,
        name: "Traveller",
        totalSpend: "$182000",
      },
      {
        id: 3,
        name: "Don Walsh",
        totalSpend: "$139900",
      },
      {
        id: 4,
        name: "Ethan Mann",
        totalSpend: "$75400",
      },
      {
        id: 5,
        name: "Promotional",
        totalSpend: "$64700",
      },
    ],
  };

  return (
    <div className="fin-content-area-container">
      <div className="fin-content-area-container__main">
        <FinContentContainer>
          <FinPieChart />
        </FinContentContainer>
        <FinContentContainer wide={true}>
          <FinBarChart />
        </FinContentContainer>
        <FinContentContainer>
          <FinTable title={TopCustomers.title} data={TopCustomers.data} />
        </FinContentContainer>
        <FinContentContainer wide={true}>
          <FinTable title={TopSelling.title} data={TopSelling.data} />
        </FinContentContainer>
      </div>
      <FinActivityComponent />
    </div>
  );
}
