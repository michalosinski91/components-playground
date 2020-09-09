import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectChangeAnimation(props) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
