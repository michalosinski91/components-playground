import React from "react";
import { Link } from "react-router-dom";

export default function NavListItem({
  section,
  source,
  activeTab,
  setActiveTab,
}) {
  const routeName = section.replace(" ", "").toLowerCase();
  return (
    <>
      {!source ? (
        <Link
          to={`/${routeName}`}
          className={
            activeTab && activeTab.toLowerCase() == routeName
              ? "navlist__item navlist__item--active"
              : "navlist__item"
          }
          onClick={() => setActiveTab(routeName)}
        >
          {section}
        </Link>
      ) : (
        <a
          target="_blank"
          href={source}
          className={
            activeTab && activeTab.toLowerCase() == routeName
              ? "navlist__item navlist__item--active"
              : "navlist__item"
          }
        >
          {section}
        </a>
      )}
    </>
  );
}
