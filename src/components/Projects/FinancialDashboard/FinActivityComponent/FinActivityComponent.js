import React from "react";
import "./FinActivityComponent.scss";

import FinActivityItem from "./FinActivityItem/FinActivityItem";

export default function FinActivityComponent({ title, data }) {
  return (
    <div className="fin-activity-component">
      <h3>{title}</h3>
      <div className="fin-activity-component__container">
        {data.map((item) => (
          <FinActivityItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
