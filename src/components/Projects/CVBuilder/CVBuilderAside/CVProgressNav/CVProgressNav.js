import React from "react";
import "./CVProgressNav.scss";

import CVProgressNavItem from "./CVProgressNavItem/CVProgressNavItem";

export default function CVProgressNav({ sections, activeSection }) {
  return (
    <div className="cv-progress-nav">
      {sections.map((item) => (
        <CVProgressNavItem
          key={item.id}
          item={item}
          activeSection={activeSection}
        />
      ))}
    </div>
  );
}
