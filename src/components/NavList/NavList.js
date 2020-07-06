import React from "react";
import "./NavList.scss";
import NavListItem from "./NavListItem/NavListItem";

export default function NavList() {
  return (
    <ul className="navlist">
      <NavListItem section={"Home"} />
      <NavListItem section={"About Me"} />
      <NavListItem
        section={"Code on GitHub"}
        source={"https://www.github.com/michalosinski91"}
      />
    </ul>
  );
}
