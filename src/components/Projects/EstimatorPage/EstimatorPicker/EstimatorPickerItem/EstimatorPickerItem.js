import React from "react";

import { motion } from "framer-motion";

export default function EstimatorPickerItem({
  service,
  active,
  handleSelectService,
}) {
  return (
    <div
      className={
        active
          ? "estimator-picker__item estimator-picker__item--active"
          : "estimator-picker__item"
      }
      onClick={() => handleSelectService(service.id)}
    >
      <img src={service.image} />
      <p>{service.title}</p>
      {active ? (
        <motion.i
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="estimator-picker__icon estimator-picker__icon--active fas fa-check-square fa-lg"
        ></motion.i>
      ) : (
        <i className="estimator-picker__icon far fa-square fa-lg"></i>
      )}
    </div>
  );
}
