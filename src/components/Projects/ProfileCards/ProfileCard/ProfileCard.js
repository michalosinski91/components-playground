import React from "react";
import "./ProfileCard.scss";

import ProfileCardSummary from "../ProfileCardSummary/ProfileCardSummary";
import ProfileCardContact from "../ProfileCardContact/ProfileCardContact";
import ProfileCardFollow from "../ProfileCardFollow/ProfileCardFollow";

export default function ProfileCard({ type, user }) {
  if (type === "follow") {
    return (
      <div className="profile-card profile-card--follow">
        <ProfileCardFollow user={user} />
      </div>
    );
  } else if (type === "contact") {
    return (
      <div className="profile-card profile-card--contact">
        <ProfileCardContact user={user} />
      </div>
    );
  } else if (type === "summary") {
    return (
      <div className="profile-card profile-card--summary">
        <ProfileCardSummary user={user} />
      </div>
    );
  }

  return null;
}
