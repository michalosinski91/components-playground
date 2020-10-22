import React from "react";
import "./ProfileCardSummary.scss";

export default function ProfileCardSummary({ user }) {
  return (
    <div className="profile-card-summary profile-card__container profile-card__container--horizontal profile-card__container--between profile-card__container--center">
      <img className="profile-card__photo" src={user.photo} />
      <div className="profile-card-summary__content profile-card__container profile-card__container--vertical profile-card__container--between">
        <h4 className="profile-card-summary__name">{user.name}</h4>
        <div className="profile-card-summary__details profile-card__container profile-card__container--horizontal profile-card__container--between">
          <div className="profile-card-summary__details-item profile-card__container profile-card__container--horizontal profile-card__container--center">
            <i className="fas fa-map-marker-alt"></i>
            <p>{user.location}</p>
          </div>
          <div className="profile-card-summary__details-item profile-card__container profile-card__container--horizontal profile-card__container--center">
            <i className="fas fa-link"></i>
            <a href="#">{user.website}</a>
          </div>
        </div>
      </div>
      <div className="profile-card__container profile-card__container--center">
        <button className="profile-card__btn profile-card__btn--wide">
          View profile
        </button>
      </div>
    </div>
  );
}
