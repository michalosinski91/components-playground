import React from "react";
import "./TrendingCreators.scss";

import Heading from "../Heading/Heading";
import TrendingCreatorsItem from "./TrendingCreatorsItem/TrendingCreatorsItem";
import photo1 from "../../../../assets/images/user1.jpg";
import photo2 from "../../../../assets/images/user3.png";
import photo3 from "../../../../assets/images/user2.png";
import photo4 from "../../../../assets/images/user4.jpg";
import photo5 from "../../../../assets/images/user5.jpg";

export default function TrendingCreators() {
  const creators = [
    {
      id: 1,
      name: "Amy Adams",
      followerCount: 2455,
      photo: photo1,
      following: false,
    },
    {
      id: 2,
      name: "Mae Pittman",
      followerCount: 3974,
      photo: photo2,
      following: true,
    },
    {
      id: 3,
      name: "William Williamson",
      followerCount: 2423,
      photo: photo3,
      following: false,
    },
    {
      id: 4,
      name: "Marie Poole",
      followerCount: 2447,
      photo: photo4,
      following: false,
    },
    {
      id: 5,
      name: "Polly Murray",
      followerCount: 1443,
      photo: photo5,
      following: true,
    },
  ];

  return (
    <div className="trending-creators">
      <Heading text="Trending Creators" />
      <div className="trending-creators__subcontainer">
        {creators.map((creator) => (
          <TrendingCreatorsItem key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}
