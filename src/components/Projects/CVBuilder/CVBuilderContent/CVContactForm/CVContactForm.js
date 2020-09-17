import React from "react";
import "./CVContactForm.scss";
import { useForm } from "react-hook-form";

export default function CVContactForm({ contactDetails }) {
  const { register, handleSubmit, errors, formState, trigger } = useForm();
  const { touched } = formState;

  function checkField(fieldName) {
    trigger(fieldName);
  }

  function getClass(fieldName) {
    const isTouched = touched[fieldName];
    const isValid = !errors[fieldName];

    if (!isTouched) {
      return "cv-contact-form__input";
    }

    return isValid
      ? "cv-contact-form__input cv-contact-form__input--valid"
      : "cv-contact-form__input cv-contact-form__input--invalid";
  }

  function getStatusMessage(fieldName) {
    const isTouched = touched[fieldName];
    const isValid = !errors[fieldName];

    if (isTouched && isValid) {
      return (
        <span>
          <i className="fas fa-check"></i>
        </span>
      );
    }

    if (isTouched && !isValid) {
      switch (errors[fieldName].type) {
        case "required":
          return <span>This field is required.</span>;
        case "minLength":
          return <span>Input too short.</span>;
        case "maxLength":
          return <span>Input too long.</span>;
        case "pattern":
          return <span>Invalid format.</span>;
        default:
          return <span>Does not meet validation criteria.</span>;
      }
    }

    return null;
  }

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="cv-contact-form">
      <form
        className="cv-contact-form__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="cv-contact-form__form-group">
          <legend>First Name</legend>
          <input
            className={getClass("firstName")}
            type="text"
            placeholder="John"
            name="firstName"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({
              required: true,
              minLength: 2,
              maxLength: 30,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {getStatusMessage("firstName")}
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Last Name</legend>
          <input
            className={getClass("lastName")}
            type="text"
            placeholder="Smith"
            name="lastName"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({
              required: true,
              minLength: 2,
              maxLength: 30,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {getStatusMessage("lastName")}
        </div>
        <div className="cv-contact-form__form-group">
          <legend>City</legend>
          <input
            className={getClass("city")}
            type="text"
            placeholder="London"
            name="city"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({ required: true, minLength: 3, maxLength: 30 })}
          />
          {getStatusMessage("city")}
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Postal Code</legend>
          <input
            className={getClass("postalCode")}
            type="text"
            placeholder="123"
            name="postalCode"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({ required: true, minLength: 3, maxLength: 10 })}
          />
          {getStatusMessage("postalCode")}
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Phone</legend>
          <input
            className={getClass("phone")}
            type="tel"
            placeholder="123456789"
            name="phone"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({ required: true, minLength: 8, maxLength: 15 })}
          />
          {getStatusMessage("phone")}
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Email</legend>
          <input
            className={getClass("email")}
            type="text"
            placeholder="mail@example.com"
            name="email"
            onClick={({ target }) => checkField(target.name)}
            onChange={({ target }) => checkField(target.name)}
            ref={register({
              required: true,
              minLength: 5,
              maxLength: 40,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {getStatusMessage("email")}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
