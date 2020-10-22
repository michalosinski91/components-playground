import React from "react";
import "./ProfileCardContact.scss";

export default function ProfileCardContact({ user }) {
  return (
    <div className="profile-card-contact profile-card__container profile-card__container--horizontal profile-card__container--center">
      <img src={user.photo} className="profile-card__photo" />
      <div className="profile-card-contact__container profile-card__container profile-card__container--vertical profile-card__container--between">
        <div className="profile-card-contact__content profile-card__container profile-card__container--vertical">
          <h4 className="profile-card-contact__name">{user.name}</h4>
          <div className="profile-card-contact__details profile-card__container profile-card__container--vertical">
            <p>{user.education.institution}</p>
            <p>{user.education.degree}</p>
          </div>
        </div>
        <button className="profile-card__btn profile-card__btn--no-fill">
          Contact
        </button>
      </div>
    </div>
  );
}
