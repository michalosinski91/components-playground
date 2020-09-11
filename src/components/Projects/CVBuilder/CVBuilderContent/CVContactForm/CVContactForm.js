import React from "react";
import "./CVContactForm.scss";
import { useForm } from "react-hook-form";

export default function CVContactForm({ contactDetails }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(contactDetails);
  return (
    <div className="cv-contact-form">
      <form className="cv-contact-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="cv-contact-form__form-group">
          <legend>First Name</legend>
          <input
            className="cv-contact-form__input"
            type="text"
            placeholder="John"
            name="firstName"
            ref={register}
          />
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Last Name</legend>
          <input
            className="cv-contact-form__input"
            type="text"
            placeholder="Smith"
            name="lastName"
            ref={register}
          />
        </div>
        <div className="cv-contact-form__form-group">
          <legend>City</legend>
          <input
            className="cv-contact-form__input"
            type="text"
            placeholder="London"
            name="city"
            ref={register}
          />
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Postal Code</legend>
          <input
            className="cv-contact-form__input"
            type="text"
            placeholder="123"
            name="postalCode"
            ref={register}
          />
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Phone</legend>
          <input
            className="cv-contact-form__input"
            type="number"
            placeholder="123 456 789"
            name="phone"
            ref={register}
          />
        </div>
        <div className="cv-contact-form__form-group">
          <legend>Email</legend>
          <input
            className="cv-contact-form__input"
            type="email"
            placeholder="mail@example.com"
            name="email"
            ref={register}
          />
        </div>
      </form>
    </div>
  );
}
