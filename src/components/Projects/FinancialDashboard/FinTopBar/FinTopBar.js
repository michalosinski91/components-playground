import React from "react";
import "./FinTopBar.scss";

import userPhoto from "../../../../assets/images/user1.jpg";

export default function FinTopBar() {
  return (
    <div className="fin-topbar">
      <form className="fin-topbar__search-form">
        <input type="text" placeholder="Search" />
        <i className="fas fa-search fa-lg"></i>
      </form>
      <div className="fin-topbar__menu">
        <div className="fin-topbar__notification">
          <i className="fas fa-bell fa-2x"></i>
          <div className="fin-topbar__notification-count">
            <p>12</p>
          </div>
        </div>
        <div className="fin-topbar__user">
          <img src={userPhoto} alt="User" />
        </div>
      </div>
    </div>
  );
}
