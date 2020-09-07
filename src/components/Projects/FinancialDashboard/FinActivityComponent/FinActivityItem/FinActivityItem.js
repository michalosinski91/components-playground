import React from "react";
import "./FinActivityItem.scss";

import FinActivityText from "./FinActivityText/FinActivityText";

export default function FinActivityItem({ item }) {
  function getIcon(type) {
    switch (type) {
      case "is":
        return <i className="fas fa-paper-plane fa-lg blue"></i>;
      case "pr":
        return <i className="fas fa-money-bill-wave-alt fa-lg green"></i>;
      case "ig":
        return <i className="fas fa-envelope fa-lg orange"></i>;
      default:
        return <i className="fas fa-imes-circle fa-lg red"></i>;
    }
  }

  function formatDate(timestamp) {
    return new Date(timestamp);
  }

  function formatTime(timestamp) {
    return formatDate(timestamp).toLocaleTimeString();
  }

  function formatDayMonthYear(timestamp) {
    return formatDate(timestamp).toLocaleDateString();
  }

  return (
    <div className="fin-activity-item">
      <div className="fin-activity-item__date-container">
        <p className="fin-activity-item__date-secondary">
          {formatTime(item.timestamp)}
        </p>
        <p className="fin-activity-item__date-primary">
          {formatDayMonthYear(item.timestamp)}
        </p>
      </div>
      <div className="fin-activity-item__icon-container">
        {getIcon(item.type)}
      </div>
      <div className="fin-activity-item__details-container">
        <h4>{item.action}</h4>
        <FinActivityText item={item} />
      </div>
    </div>
  );
}
