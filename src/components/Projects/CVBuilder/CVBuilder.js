import React, { useState, useEffect, useRef } from "react";
import "./CVBuilder.scss";

import { motion } from "framer-motion";

import { connect } from "react-redux";
import {
  setContactDetails,
  setTopStrengths,
  setWorkExp,
  setWorkGap,
  resetForm,
} from "../../../store/actions";

import CVBuilderMain from "./CVBuilderMain/CVBuilderMain";
import CVBuilderAside from "./CVBuilderAside/CVBuilderAside";
import CVBuilderSpinner from "./CVBuilderSpinner/CVBuilderSpinner";
import CVBuilderBtn from "./CVBuilderBtn/CVBuilderBtn";

export function CVBuilder({
  contactDetails,
  setContactDetails,
  topStrengths,
  setTopStrengths,
  workExp,
  setWorkExp,
  workGap,
  setWorkGap,
  resetForm,
}) {
  const [activeSection, setActiveSection] = useState(1);
  const [progress, setProgress] = useState(0);

  const prevActiveSectionRef = useRef();

  useEffect(() => {
    prevActiveSectionRef.current = activeSection;
  }, [activeSection]);

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

  function handleResetForm() {
    setActiveSection(1);
    setProgress(0);
    resetForm();
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
      {progress == 100 ? (
        <motion.div
          className="cv-builder__complete"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
        >
          <CVBuilderSpinner />
          <h2>Creating your letter...</h2>
          <CVBuilderBtn
            text={"Reset"}
            fill={true}
            action={handleResetForm}
            icon={"fas fa-undo-alt"}
          />
        </motion.div>
      ) : null}
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
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(CVBuilder);
