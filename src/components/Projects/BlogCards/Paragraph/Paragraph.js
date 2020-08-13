import React from "react";
import "./Paragraph.scss";

export default function Paragraph({ text }) {
  return (
    <div className="paragraph">
      <p>{text}</p>
    </div>
  );
}
