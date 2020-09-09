import React from "react";
import "./FAQAccordion.scss";

import ProjectChangeAnimation from "../../ProjectChangeAnimation/ProjectChangeAnimation";

import FAQHeader from "./FAQHeader/FAQHeader";
import FAQContent from "./FAQContent/FAQContent";

export default function FAQAccordion() {
  return (
    <ProjectChangeAnimation>
      <div className="faq-accordion">
        <div className="faq-accordion__container">
          <FAQHeader />
          <FAQContent />
        </div>
      </div>
    </ProjectChangeAnimation>
  );
}
