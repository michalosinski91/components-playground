import React from "react";
import "./FinContentAreaContainer.scss";
import FinContentContainer from "../FinContentContainer/FinContentContainer";
import FinActivityComponent from "../FinActivityComponent/FinActivityComponent";
import FinBarChart from "../FinBarChart/FinBarChart";
import FinPieChart from "../FinPieChart/FinPieChart";
import FinTable from "../FinTable/FinTable";

export default function FinContentAreaContainer() {
  const TopSelling = {
    title: "Top Selling Services/Products",
    data: [
      {
        id: 1,
        name: ".Net Consultancy Services",
        hourlyRate: "$25/hr",
        totalIncome: "$124,200",
      },
      {
        id: 2,
        name: "Software Testing and QA",
        hourlyRate: "$10/hr",
        totalIncome: "$99,600",
      },
      {
        id: 3,
        name: "UI/UX Design Services",
        hourlyRate: "$30/hr",
        totalIncome: "$72,550",
      },
      {
        id: 4,
        name: "Mobile Application Development",
        hourlyRate: "$25/hr",
        totalIncome: "$64,300",
      },
      {
        id: 5,
        name: "Art direction",
        hourlyRate: "$25/hr",
        totalIncome: "$23,700",
      },
    ],
  };

  const TopCustomers = {
    title: "Top Paying Customers",
    data: [
      {
        id: 1,
        name: "Reactial",
        totalSpend: "$230,700",
      },
      {
        id: 2,
        name: "Traveller",
        totalSpend: "$182,000",
      },
      {
        id: 3,
        name: "Don Walsh",
        totalSpend: "$139,900",
      },
      {
        id: 4,
        name: "Ethan Mann",
        totalSpend: "$75,400",
      },
      {
        id: 5,
        name: "Promotional",
        totalSpend: "$64,700",
      },
    ],
  };

  const invoices = [
    {
      id: "invoiced",
      label: "Invoiced",
      value: 78900,
      color: "#4C8DEB",
    },
    {
      id: "paid",
      label: "Paid",
      value: 32000,
      color: "#5AD6B0",
    },
    {
      id: "dueDate",
      label: "Due Date",
      value: 25700,
      color: "#FFAB49",
    },
    {
      id: "overdue",
      label: "Overdue",
      value: 7250,
      color: "#EE5D70",
    },
  ];

  return (
    <div className="fin-content-area-container">
      <div className="fin-content-area-container__main">
        <FinContentContainer>
          <FinPieChart title="Invoices" data={invoices} />
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
