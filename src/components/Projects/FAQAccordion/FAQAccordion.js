import React from "react";
import "./FAQAccordion.scss";

import FAQHeader from "./FAQHeader/FAQHeader";
import FAQContent from "./FAQContent/FAQContent";

export default function FAQAccordion() {
  return (
    <div className="faq-accordion">
      <div className="faq-accordion__container">
        <FAQHeader />
        <FAQContent />
      </div>
    </div>
  );
}
