import React from "react";
import "./PricingOption.scss";

export default function PricingOption({ option }) {
  return (
    <div className="pricing-option">
      <h2 className="pricing-option__header">{option.name}</h2>
      <div className="pricing-option__details">
        <h4>
          {Number.isInteger(option.price)
            ? `$${option.price} / month`
            : option.price}
        </h4>
        <p>{option.visitorLimit.toLocaleString()} monthly visitors</p>
      </div>
      <ul className="pricing-option__features-list">
        {option.features.map((feature) => (
          <li key={feature} className="pricing-option__feature">
            {feature}
          </li>
        ))}
      </ul>
      <button className={option.buttonStyle}>{option.buttonText}</button>
    </div>
  );
}
