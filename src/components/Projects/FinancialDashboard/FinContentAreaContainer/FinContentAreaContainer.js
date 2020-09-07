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

  const payments = [
    {
      month: "Oct",
      value: 210000,
    },
    {
      month: "Nov",
      value: 140000,
    },
    {
      month: "Dec",
      value: 225000,
    },
    {
      month: "Jan",
      value: 230000,
    },
    {
      month: "Feb",
      value: 148000,
    },
    {
      month: "Mar",
      value: 112500,
    },
  ];

  const activity = [
    {
      id: 1,
      timestamp: 1581422580000,
      type: "is",
      action: "Invoice Sent",
      invoiceId: "0076",
      amount: 1300,
      email: "email@address.com",
    },
    {
      id: 2,
      timestamp: 1581172860000,
      type: "is",
      action: "Invoice Sent",
      invoiceId: "0075",
      amount: 2000,
      email: "email@address.com",
    },
    {
      id: 3,
      timestamp: 1578754620000,
      type: "pr",
      action: "Payment Received",
      invoiceId: "0072",
      amount: 1300,
      email: "email@address.com",
    },
    {
      id: 4,
      timestamp: 1578131340000,
      type: "ig",
      action: "Invoice Generated",
      invoiceId: "0076",
      amount: 1300,
      email: "email@address.com",
    },
    {
      id: 5,
      timestamp: 1575993247000,
      type: "pr",
      action: "Payment Received",
      invoiceId: "0070",
      amount: 1000,
      email: "email@address.com",
    },
    {
      id: 6,
      timestamp: 1573481160000,
      type: "ig",
      action: "Invoice Generated",
      invoiceId: "0075",
      amount: 2000,
      email: "email@address.com",
    },
    {
      id: 7,
      timestamp: 1573122180000,
      type: "is",
      action: "Invoice Sent",
      invoiceId: "0071",
      amount: 2500,
      email: "email@address.com",
    },
    {
      id: 8,
      timestamp: 1572876660000,
      type: "ig",
      action: "Invoice Generated",
      invoiceId: "0071",
      amount: 2500,
      email: "email@address.com",
    },
    {
      id: 9,
      timestamp: 1572777660000,
      type: "pr",
      action: "Payment Received",
      invoiceId: "0065",
      amount: 1700,
      email: "email@address.com",
    },
  ];

  return (
    <div className="fin-content-area-container">
      <div className="fin-content-area-container__main">
        <FinContentContainer>
          <FinPieChart title="Invoices" data={invoices} />
        </FinContentContainer>
        <FinContentContainer wide={true}>
          <FinBarChart title="Payments" data={payments} />
        </FinContentContainer>
        <FinContentContainer>
          <FinTable title={TopCustomers.title} data={TopCustomers.data} />
        </FinContentContainer>
        <FinContentContainer wide={true}>
          <FinTable title={TopSelling.title} data={TopSelling.data} />
        </FinContentContainer>
      </div>
      <FinActivityComponent title="Activity" data={activity} />
    </div>
  );
}
