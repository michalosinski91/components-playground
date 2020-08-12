import React, { useState } from "react";
import "./NavigationCardLinksContainer.scss";

import NavigationCardLinkItem from "./NavigationCardLinkItem/NavigationCardLinkItem";

export default function NavigationCardLinksContainer() {
  const [activeLink, setActiveLink] = useState(null);
  const links = [
    {
      id: 1,
      name: "Collections",
      text: "A Collection's fields define the structure of the items whitin it",
      icon: "fas fa-th-large fa-2x",
    },
    {
      id: 2,
      name: "Items",
      text:
        "Beyond the user defined fields, there are a handful of additional fields",
      icon: "fas fa-clone fa-2x",
    },
    {
      id: 3,
      name: "Images",
      text:
        "Upload a new image, set the image url to the corresponding item's field",
      icon: "fas fa-image fa-2x",
    },
    {
      id: 4,
      name: "API Versions",
      text:
        "In addition to an access token, requests also must specify which version they should use",
      icon: "fas fa-code fa-2x",
    },
  ];

  return (
    <div className="nav-card">
      {links.map((item) => (
        <NavigationCardLinkItem
          key={item.id}
          item={item}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      ))}
    </div>
  );
}
