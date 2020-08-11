import React from "react";
import "./SubscribeForm.scss";

export default function SubscribeForm() {
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("click");
  }
  return (
    <form className="subscribe-form" onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="email"
        htmlFor="email"
        placeholder="Enter your email address"
        className="subscribe-form__input"
      />
      <button
        className="subscribe-form__button subscribe-form__button--submit"
        type="submit"
      >
        Send <i className="fas fa-long-arrow-alt-right fa-lg"></i>
      </button>
      <div className="subscribe-form__checkbox-container">
        <input
          type="checkbox"
          name="consent"
          className="subscribe-form__checkbox"
        />
        <label htmlFor="consent" className="subscribe-form__checkbox-label">
          I agree to my email address being stored and used to receive monthly
          newsletter.
        </label>
      </div>
    </form>
  );
}
