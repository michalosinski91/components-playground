import React from "react";
import "./RecipePageContainer.scss";

export default function RecipePageContainer(props) {
  return (
    <div
      className={
        props.red
          ? "recipe-page-container recipe-page-container--red"
          : "recipe-page-container"
      }
    >
      {props.children}
    </div>
  );
}
