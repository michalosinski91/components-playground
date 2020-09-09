import React from "react";
import "./BlogCards.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import TrendingCreators from "./TrendingCreators/TrendingCreators";
import PremiumAccComp from "./PremiumAccComp/PremiumAccComp";
import CreatePost from "./CreatePost/CreatePost";
import BlogCardContainer from "./BlogCardContainer/BlogCardContainer";

export default function BlogCards() {
  return (
    <ProjectChangeAnimation>
      <div className="blog-cards">
        <BlogCardContainer>
          <TrendingCreators />
        </BlogCardContainer>

        <div className="blog-cards__subcontainer">
          <BlogCardContainer>
            <PremiumAccComp />
          </BlogCardContainer>
          <BlogCardContainer size="small">
            <CreatePost />
          </BlogCardContainer>
        </div>
      </div>
    </ProjectChangeAnimation>
  );
}
