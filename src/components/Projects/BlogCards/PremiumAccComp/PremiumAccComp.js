import React from "react";
import "./PremiumAccComp.scss";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

export default function PremiumAccComp() {
  return (
    <div className="premium-acc-comp">
      <Heading text="Premium Account" />
      <div className="premium-acc-comp__subcontainer">
        <Paragraph text="The best experience with monthly coins." />
        <Button type="dark" text="Try Now" />
      </div>
    </div>
  );
}
