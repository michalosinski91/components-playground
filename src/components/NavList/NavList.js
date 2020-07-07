import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NavList.scss";
import NavListItem from "./NavListItem/NavListItem";

export default function NavList() {
  let location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="nav-container">
      <div className="navlist">
        <NavListItem
          label={"Projects"}
          link={"/projects"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="navlist">
        <NavListItem
          label={"Home"}
          link={"/"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavListItem
          label={"About Me"}
          link={"/aboutme"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavListItem
          label={"Code on GitHub"}
          link={null}
          source={"https://www.github.com/michalosinski91"}
          activeTab={null}
          setActiveTab={null}
        />
      </div>
    </div>
  );
}
