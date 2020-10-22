import React from "react";
import "./ProfileCardFollow.scss";

export default function ProfileCardFollow({ user }) {
  return (
    <div className="profile-card-follow">
      <div className="profile-card-follow__banner">
        <img src={user.bannerPicture} />
      </div>
      <div className="profile-card-follow__content profile-card__container profile-card__container--vertical profile-card__container--between profile-card__container--center">
        <img
          className="profile-card-follow__photo profile-card__photo"
          src={user.photo}
        />
        <h4 className="profile-card-follow__name">{user.name}</h4>
        <p className="profile-card-follow__details">{user.company}</p>
        <button className="profile-card__btn">Follow</button>
      </div>
    </div>
  );
}
