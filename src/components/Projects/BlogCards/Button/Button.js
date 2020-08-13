import React from "react";
import "./Button.scss";

export default function Button(props) {
  if (props.type == "dark") {
    return <button className="btn btn--dark">{props.text}</button>;
  }
  return <button className="btn">{props.text}</button>;
}
