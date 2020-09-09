import React from "react";
import "./Home.scss";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 500 }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 1 } }}
      exit={{
        opacity: 0,
        translateY: 500,
        transition: { duration: 1 },
      }}
      className="home"
      key="home"
    >
      Home
    </motion.div>
  );
}
