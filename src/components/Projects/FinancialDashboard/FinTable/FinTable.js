import React from "react";
import "./FinTable.scss";
import FinTableRow from "./FitTableRow/FinTableRow";

export default function FinTable({ title, data }) {
  return (
    <div className="fin-table">
      <h3>{title}</h3>
      <table className="fin-table__table">
        <tbody>
          {data.map((item) => (
            <FinTableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
