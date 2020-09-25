import React from "react";
import "./EstimatorSummary.scss";

import { motion, AnimatePresence } from "framer-motion";

import EstimatorSummaryItem from "./EstimatorSummaryItem/EstimatorSummaryItem";
import EstimatorSummaryQuote from "./EstimatorSummaryQuote/EstimatorSummaryQuote";

export default function EstimatorSummary({ selected, removeService }) {
  function formatMoney(num) {
    return `$${num.toFixed(2)}`;
  }
  function getTotal() {
    const total = selected.reduce((acc, item) => {
      return acc + item.cost;
    }, 0);

    return formatMoney(total);
  }
  return (
    <motion.div
      initial={{ translateX: 300, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 300, opacity: 0 }}
      className="estimator-summary"
    >
      <AnimatePresence initial={false}>
        {selected.map((item) => (
          <EstimatorSummaryItem
            key={item.id}
            item={item}
            removeService={removeService}
          />
        ))}
      </AnimatePresence>
      <EstimatorSummaryQuote total={getTotal()} />
    </motion.div>
  );
}
