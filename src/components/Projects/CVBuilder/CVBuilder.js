import React, { useState } from "react";
import "./CVBuilder.scss";

import CVBuilderMain from "./CVBuilderMain/CVBuilderMain";
import CVBuilderAside from "./CVBuilderAside/CVBuilderAside";

export default function CVBuilder() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      titlePrimary: "What's the best way for employers to contact you?",
      titleSecondary: "We suggest including an email and a phone number",
      progress: 35,
      component: "CVContactForm",
    },
    {
      id: 2,
      titlePrimary: "Select your top three strengths",
      titleSecondary:
        "Showing how you're unique helps you stand out from the competition",
      progress: 15,
      component: "CVStrengths",
    },
    {
      id: 3,
      titlePrimary: "How long have you been working?",
      titleSecondary:
        "Include relevant internships, volunteer work, and unpaid jobs",
      progress: 30,
      component: "CVWorkExp",
    },
    {
      id: 4,
      titlePrimary: "Why did you stop working?",
      titleSecondary:
        "Choose from the following several reasons why you might have stpped working",
      progress: 20,
      component: "CVWorkGap",
    },
  ];

  function getActiveSection(id) {
    const section = sections.filter((section) => section.id == activeSection);
    return section[0];
  }

  return (
    <div className="cv-builder">
      <div className="cv-builder__container">
        <CVBuilderMain
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section={getActiveSection(activeSection)}
        />
        <CVBuilderAside
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}
