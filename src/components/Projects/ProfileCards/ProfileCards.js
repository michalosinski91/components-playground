import React from "react";
import "./ProfileCards.scss";

import ProfileCard from "./ProfileCard/ProfileCard";
import userPhoto from "../../../assets/images/user4.jpg";
import userBanner from "../../../assets/images/nature-snow-forest.jpg";

export default function ProfileCards() {
  const user = {
    id: 1,
    photo: userPhoto,
    name: "Amanda Graham",
    company: "A well renowned Mobile Application Development Company in Europe",
    location: "Bergen",
    education: {
      institution: "University of Nevada",
      degree: "PhD of Information Systems",
    },
    website: "website.com",
    bannerPicture: userBanner,
  };

  return (
    <div className="profile-cards">
      <ProfileCard type="follow" user={user} />
      <ProfileCard type="contact" user={user} />
      <ProfileCard type="summary" user={user} />
    </div>
  );
}
