import React from "react";

export default function FinPieChartLegendItem({ item, setActiveDetail }) {
  return (
    <div
      className="fin-pie-chart__legend-item"
      onClick={() => setActiveDetail(item)}
    >
      <div
        className="fin-pie-chart__legend-item-colour"
        style={{ backgroundColor: `${item.color}` }}
      ></div>
      <div className="fin-pie-chart__legend-item-text">{item.label}</div>
    </div>
  );
}
