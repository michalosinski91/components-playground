import React from "react";
import "./Placeholder.scss";

import { motion } from "framer-motion";

export default function Placeholder() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="placeholder"
    >
      Please select a project from the sidebar...
    </motion.div>
  );
}
