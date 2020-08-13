import React from "react";
import "./TrendingCreatorsItem.scss";
import Button from "../../Button/Button";

export default function TrendingCreatorsItem({ creator }) {
  return (
    <div className="creator">
      <img src={creator.photo} />
      <div className="creator__subcontainer">
        <h4>{creator.name}</h4>
        <p>{creator.followerCount.toLocaleString()} followers</p>
      </div>
      <Button
        type={creator.following == true ? "dark" : null}
        text={creator.following == true ? "Unfollow" : "Follow"}
      />
    </div>
  );
}
