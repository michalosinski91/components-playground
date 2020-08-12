import React from "react";
import "./LoginCardForm.scss";
import GoogleLogo from "../../../../assets/images/google.png";

export default function LoginCardForm() {
  return (
    <form className="login-form">
      <button className="login-form__btn login-form__btn--ghost">
        <img src={GoogleLogo} alt="Google logo" /> Log in with Google
      </button>
      <small>or</small>
      <div className="login-form__form-control">
        <label className="login-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="login-form__input"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="login-form__form-control">
        <label className="login-form__label" htmlFor="password">
          Password
        </label>
        <input
          className="login-form__input"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="login-form__checkbox-container">
        <input type="checkbox" id="remember" />
        <label
          className="login-form__label login-form__label--checkbox"
          htmlFor="remember"
        >
          Remember me
        </label>

        <a href="#">Forgot Password</a>
      </div>
      <button class="login-form__btn">Log In</button>
      <small>
        Don't have an account? <a href="#">Sign up</a>
      </small>
    </form>
  );
}
