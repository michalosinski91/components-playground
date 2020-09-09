import React from "react";
import "./CVBuilderContent.scss";

import CVContactForm from "./CVContactForm/CVContactForm";
import CVStrengths from "./CVStrengths/CVStrengths";
import CVWorkExp from "./CVWorkExp/CVWorkExp";
import CVWorkGap from "./CVWorkGap/CVWorkGap";

export default function CVBuilderContent({ section }) {
  const components = {
    CVContactForm,
    CVStrengths,
    CVWorkExp,
    CVWorkGap,
  };

  function Comp(name) {
    const SpecificComponent = components[name];
    return <SpecificComponent />;
  }

  return <div>{Comp(section.component)}</div>;
}
