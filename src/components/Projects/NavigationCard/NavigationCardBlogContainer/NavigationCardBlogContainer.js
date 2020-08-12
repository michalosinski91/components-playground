import React from "react";
import "./NavigationCardBlogContainer.scss";

import NavigationCardBlogItem from "./NavigationCardBlogItem/NavigationCardBlogItem";

export default function NavigationCardBlogContainer() {
  const blogEntries = [
    {
      id: 1,
      title: "Expanding support for JCB payments",
      author: "Jane Wagner",
    },
    {
      id: 2,
      title: "Customize to match your brand",
      author: "Edward Bowen",
    },
    {
      id: 3,
      title: "Launch in five more European countries",
      author: "Rosalie Chambers",
    },
  ];

  return (
    <div className="nav-card-blog">
      <h3 className="nav-card-blog__header">From our blog</h3>
      <div className="nav-card-blog__subcontainer">
        {blogEntries.map((entry) => (
          <NavigationCardBlogItem key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
