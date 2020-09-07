import React from "react";

import "./FinActivityText.scss";

export default function FinActivityText({ item }) {
  function formatMoney(val) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(val);
  }

  switch (item.type) {
    case "is":
      return (
        <p className="fin-activity-text">
          Invoice <a href="#">#{item.invoiceId}</a> of amount{" "}
          <strong>{formatMoney(item.amount)}</strong> has been emailed to{" "}
          {item.email}.
        </p>
      );
    case "pr":
      return (
        <p className="fin-activity-text">
          Invoice <a href="#">#{item.invoiceId}</a> of amount{" "}
          <strong>{formatMoney(item.amount)}</strong> has been paid and added to
          your account.
        </p>
      );
    case "ig":
      return (
        <p className="fin-activity-text">
          Invoice <a href="#">#{item.invoiceId}</a> of amount{" "}
          <strong>{formatMoney(item.amount)}</strong> has been generated and is
          ready to be sent. <a href="#">Send now</a>.
        </p>
      );
    default:
      <p>No details avaliable.</p>;
  }

  return <div className="fin-activity-text"></div>;
}
