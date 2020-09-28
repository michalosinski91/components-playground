import React from "react";

import { motion } from "framer-motion";

export default function EstimatorSummaryItem({ item, removeService }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 70 }}
      exit={{ height: 0, opacity: 0.1, transition: { duration: 0.2 } }}
      className="estimator-summary__item"
    >
      <div className="estimator-summary__item-image">
        <img src={item.image} />
      </div>
      <div className="estimator-summary__item-description">
        <h4>{item.title}</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="estimator-summary__item-remove">
        <i
          className="fas fa-times-circle fa-lg"
          onClick={() => removeService(item.id)}
        ></i>
      </div>
    </motion.div>
  );
}
