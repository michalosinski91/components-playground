import React, { useState } from "react";
import "./NavList.scss";
import NavListItem from "./NavListItem/NavListItem";

export default function NavList() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="nav-container">
      <div className="navlist">
        <NavListItem
          section={"Projects"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="navlist">
        <NavListItem
          section={"Home"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavListItem
          section={"About Me"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavListItem
          section={"Code on GitHub"}
          source={"https://www.github.com/michalosinski91"}
          activeTab={null}
          setActiveTab={null}
        />
      </div>
    </div>
  );
}
