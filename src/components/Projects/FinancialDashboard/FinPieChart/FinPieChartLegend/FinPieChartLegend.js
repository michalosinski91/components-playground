import React from "react";
import FinPieChartLegendItem from "./FinPieChartLegendItem/FinPieChartLegendItem";

export default function FinPieChartLegend({ data, setActiveDetail }) {
  return (
    <div className="fin-pie-chart__legend">
      {data.map((item) => (
        <FinPieChartLegendItem
          key={item.id}
          item={item}
          setActiveDetail={setActiveDetail}
        />
      ))}
    </div>
  );
}
