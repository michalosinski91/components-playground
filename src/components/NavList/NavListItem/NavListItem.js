import React from "react";
import { Link } from "react-router-dom";

export default function NavListItem({ section, source }) {
  const routeName = section.replace(" ", "").toLowerCase();
  return (
    <li className="navlist__item">
      {!source ? (
        <Link to={`/${routeName}`}>{section}</Link>
      ) : (
        <a target="_blank" href={source}>
          {section}
        </a>
      )}
    </li>
  );
}
