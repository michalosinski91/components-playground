import React from "react";
import "./Navbar.scss";
import NavDropdown from "../components/NavDropdown/NavDropdown";
import NavList from "../components/NavList/NavList";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavDropdown label={"Select a Project"} />
      <NavList />
    </div>
  );
}
