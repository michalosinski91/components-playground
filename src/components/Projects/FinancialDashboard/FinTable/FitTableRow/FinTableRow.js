import React from "react";

export default function FinTableRow({ data }) {
  const values = Object.values(data);

  return (
    <tr className="fin-table__row">
      {values.map((val) => (
        <td key={val}>{val}</td>
      ))}
    </tr>
  );
}
