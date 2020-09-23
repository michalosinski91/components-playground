import React from "react";
import "./CVBuilderMain.scss";
import { motion, AnimatePresence } from "framer-motion";

import CVBuilderHeader from "../CVBuilderHeader/CVBuilderHeader";
import CVBuilderContent from "../CVBuilderContent/CVBuilderContent";

export default function CVBuilderMain({
  section,
  activeSection,
  setActiveSection,
  progress,
  setProgress,
  sections,
  contactDetails,
  setContactDetails,
  topStrengths,
  setTopStrengths,
  workExp,
  setWorkExp,
  workGap,
  setWorkGap,
}) {
  return (
    <div className="cv-builder-main">
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          className="cv-builder-main__container"
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, scale: 1, transition: { duration: 0.3 } }}
        >
          <CVBuilderHeader section={section} />
          <CVBuilderContent
            contactDetails={contactDetails}
            setContactDetails={setContactDetails}
            topStrengths={topStrengths}
            setTopStrengths={setTopStrengths}
            workExp={workExp}
            setWorkExp={setWorkExp}
            workGap={workGap}
            setWorkGap={setWorkGap}
            section={section}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            progress={progress}
            setProgress={setProgress}
            sections={sections}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
