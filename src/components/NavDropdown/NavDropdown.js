import React, { useState } from "react";
import "./NavDropdown.scss";
import DropdownOption from "./DropdownOption/DropdownOption";

export default function NavDropdown({ label }) {
  const [showMenu, setShowMenu] = useState(false);
  const [mockItems, setMockItems] = useState([
    "test1",
    "test2",
    "test3",
    "test4",
  ]);
  return (
    <div className="dropdown" onClick={() => setShowMenu(!showMenu)}>
      <div className="dropdown__label">
        {label}{" "}
        <i
          className={
            showMenu
              ? "fa fa-angle-right dropdown__icon dropdown__icon--rotate"
              : "fa fa-angle-right dropdown__icon"
          }
        ></i>
      </div>
      <div
        className={
          showMenu ? "dropdown__menu" : "dropdown__menu dropdown__menu--hide"
        }
      >
        {mockItems.map((item, index) => (
          <DropdownOption key={index} label={item} />
        ))}
      </div>
    </div>
  );
}
