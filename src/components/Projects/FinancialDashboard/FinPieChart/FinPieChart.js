import React, { useState } from "react";
import "./FinPieChart.scss";

import { ResponsivePieCanvas } from "@nivo/pie";
import FinPieChartLegend from "./FinPieChartLegend/FinPieChartLegend";

export default function FinPieChart({ title, data }) {
  const [activeDetail, setActiveDetail] = useState(data[0]);

  function formatMoney(val) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(val);
  }
  return (
    <div className="fin-pie-chart">
      <h3>{title}</h3>
      <div className="fin-pie-chart__chart">
        <ResponsivePieCanvas
          data={data}
          pixelRatio={1}
          innerRadius={0.85}
          colors={data.map((c) => c.color)}
          colorBy="id"
          borderColor={{ from: "color", modifiers: [["darker", "0.2"]] }}
          enableRadialLabels={false}
          enableSlicesLabels={false}
          animate={false}
          isInteractive={false}
          onClick={(e) => setActiveDetail(e)}
        />
        <div className="fin-pie-chart__chart-details">
          <p className="fin-pie-chart__chart-details-primary">
            {formatMoney(activeDetail.value)}
          </p>
          <p className="fin-pie-chart__chart-details-secondary">
            {activeDetail.label}
          </p>
        </div>
      </div>
      <FinPieChartLegend data={data} setActiveDetail={setActiveDetail} />
    </div>
  );
}

/*
legends={[
          {
            anchor: "bottom",
            direction: "row",
            itemDirection: "left-to-right",
            translateY: 30,
            itemWidth: 70,
            itemHeight: 18,
            itemTextColor: "#405169",
            symbolSize: 12,
            symbolShape: "square",
          },
        ]}
*/
