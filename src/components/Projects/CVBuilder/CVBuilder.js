import React, { useState, useEffect, useRef } from "react";
import "./CVBuilder.scss";

import { connect } from "react-redux";
import {
  setContactDetails,
  setTopStrengths,
  setWorkExp,
  setWorkGap,
} from "../../../store/actions";

import CVBuilderMain from "./CVBuilderMain/CVBuilderMain";
import CVBuilderAside from "./CVBuilderAside/CVBuilderAside";

export function CVBuilder({
  contactDetails,
  setContactDetails,
  topStrengths,
  setTopStrengths,
  workExp,
  setWorkExp,
  workGap,
  setWorkGap,
}) {
  const [activeSection, setActiveSection] = useState(3);
  const [progress, setProgress] = useState(0);

  const prevActiveSectionRef = useRef();

  useEffect(() => {
    prevActiveSectionRef.current = activeSection;
  });

  const prevActiveSection = prevActiveSectionRef.current;

  const sections = [
    {
      id: 1,
      name: "Personal Information",
      shortName: "Information",
      titlePrimary: "What's the best way for employers to contact you?",
      titleSecondary: "We suggest including an email and a phone number",
      value: 35,
      component: "CVContactForm",
    },
    {
      id: 2,
      name: "Skills and strenghts",
      shortName: "Skills",
      titlePrimary: "Select your top three strengths",
      titleSecondary:
        "Showing how you're unique helps you stand out from the competition",
      value: 15,
      component: "CVStrengths",
    },
    {
      id: 3,
      name: "Work experience",
      shortName: "Experience",
      titlePrimary: "How long have you been working?",
      titleSecondary:
        "Include relevant internships, volunteer work, and unpaid jobs",
      value: 30,
      component: "CVWorkExp",
    },
    {
      id: 4,
      name: "Work gap",
      shortName: "Gap",
      titlePrimary: "Why did you stop working?",
      titleSecondary:
        "Choose from the following several reasons why you might have stopped working",
      value: 20,
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
          progress={progress}
          setProgress={setProgress}
          prevActiveSection={prevActiveSection}
          sections={sections}
          contactDetails={contactDetails}
          setContactDetails={setContactDetails}
          topStrengths={topStrengths}
          setTopStrengths={setTopStrengths}
          workExp={workExp}
          setWorkExp={setWorkExp}
          workGap={workGap}
          setWorkGap={setWorkGap}
        />
        <CVBuilderAside
          sections={sections}
          section={getActiveSection(activeSection)}
          progress={progress}
          activeSection={activeSection}
          prevActiveSection={prevActiveSection}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactDetails: state.contactDetails,
    topStrengths: state.topStrengths,
    workExp: state.workExp,
    workGap: state.workGap,
  };
};

const mapDispatchToProps = {
  setContactDetails,
  setTopStrengths,
  setWorkExp,
  setWorkGap,
};

export default connect(mapStateToProps, mapDispatchToProps)(CVBuilder);
