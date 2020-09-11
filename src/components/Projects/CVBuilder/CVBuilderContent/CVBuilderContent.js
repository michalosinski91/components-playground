import React from "react";
import "./CVBuilderContent.scss";

import CVContactForm from "./CVContactForm/CVContactForm";
import CVStrengths from "./CVStrengths/CVStrengths";
import CVWorkExp from "./CVWorkExp/CVWorkExp";
import CVWorkGap from "./CVWorkGap/CVWorkGap";

export default function CVBuilderContent({ section, contactDetails }) {
  const components = {
    CVContactForm,
    CVStrengths,
    CVWorkExp,
    CVWorkGap,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent contactDetails={contactDetails} />;
  }

  return <div className="cv-builder-content">{Comp(section.component)}</div>;
}
