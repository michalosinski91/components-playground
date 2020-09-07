import React from "react";
import "./FinBarChart.scss";

import { ResponsiveBarCanvas } from "@nivo/bar";

export default function FinBarChart({ title, data }) {
  function formatLabel(v) {
    let str = v.toString();
    if (str === "0") {
      return v;
    }

    for (let i = 0; i < 3; i++) {
      str = str.slice(0, -1);
    }

    return `${str}k`;
  }

  return (
    <div className="fin-bar-chart">
      <h3>{title}</h3>
      <div className="fin-bar-chart__chart">
        <ResponsiveBarCanvas
          data={data}
          keys={["value"]}
          indexBy="month"
          colors={"#5AD6B0"}
          margin={{ top: 25, right: 0, bottom: 25, left: 50 }}
          minValue={0}
          maxValue={250000}
          enableGridY={true}
          gridYValues={[0, 50000, 100000, 150000, 200000, 250000]}
          enableGridX={false}
          isInteractive={true}
          innerPadding={0}
          padding={0.75}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            tickValues: 6,
            format: (v) => formatLabel(v),
          }}
          tooltip={function (e) {
            const val = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(e.value);
            return <p>{val}</p>;
          }}
        />
      </div>
    </div>
  );
}
