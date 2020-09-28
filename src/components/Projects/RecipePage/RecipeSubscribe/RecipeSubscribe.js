import React, { useState } from "react";
import "./RecipeSubscribe.scss";

import bannerImg from "../../../../assets/images/ramen.jpg";

export default function RecipeSubscribe() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    email.length ? setEmail("") : console.log("No email provided");
  }

  return (
    <div className="recipe-subscribe">
      <div className="recipe-subscribe__banner">
        <img
          className="recipe-subscribe__image"
          src={bannerImg}
          alt="subscribe banner"
        />
      </div>
      <div className="recipe-subscribe__content">
        <h3>Never miss a recipe</h3>
        <h5>Subscribe today</h5>
        <form
          className="recipe-subscribe__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="recipe-subscribe__input"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        <p>We won't send you spam. Unsubscribe at any time.</p>
      </div>
    </div>
  );
}
