import React from "react";
import { Link } from "react-router-dom";

export default function NavListItem({
  label,
  link,
  source,
  activeTab,
  setActiveTab,
}) {
  return (
    <>
      {!source ? (
        <Link
          to={link}
          className={
            activeTab && activeTab == link
              ? "navlist__item navlist__item--active"
              : "navlist__item"
          }
          onClick={() => setActiveTab(link)}
        >
          {label}
        </Link>
      ) : (
        <a target="_blank" href={source} className="navlist__item">
          {label}
        </a>
      )}
    </>
  );
}
