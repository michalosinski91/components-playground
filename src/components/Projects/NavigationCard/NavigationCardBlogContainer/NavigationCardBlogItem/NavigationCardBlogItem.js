import React from "react";
import "./NavigationCardBlogItem.scss";

export default function NavigationCardBlogItem({ entry }) {
  return (
    <div className="nav-card-blog-item">
      <h4 className="nav-card-blog-item__title">{entry.title}</h4>
      <p className="nav-card-blog-item__author">{entry.author}</p>
    </div>
  );
}
