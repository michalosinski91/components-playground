import React from "react";
import "./NavigationCard.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import NavigationCardHeader from "./NavigationCardHeader/NavigationCardHeader";
import NavigationCardLinksContainer from "./NavigationCardLinksContainer/NavigationCardLinksContainer";
import NavigationCardBlogContainer from "./NavigationCardBlogContainer/NavigationCardBlogContainer";

export default function NavigationCard() {
  return (
    <ProjectChangeAnimation>
      <div className="navigation-card">
        <NavigationCardHeader />
        <div className="navigation-card__subcontainer">
          <NavigationCardLinksContainer />
          <NavigationCardBlogContainer />
        </div>
      </div>
    </ProjectChangeAnimation>
  );
}
