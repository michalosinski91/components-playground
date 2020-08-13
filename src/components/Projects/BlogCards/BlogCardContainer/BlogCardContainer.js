import React from "react";
import "./BlogCardContainer.scss";

export default function BlogCardContainer(props) {
  if (props.size == "small") {
    return (
      <div className="blog-card-container blog-card-container--small">
        {props.children}
      </div>
    );
  }
  return <div className="blog-card-container">{props.children}</div>;
}
