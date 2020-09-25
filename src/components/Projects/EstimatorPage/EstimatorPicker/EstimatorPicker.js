import React, { useState } from "react";
import "./EstimatorPicker.scss";

import { AnimatePresence } from "framer-motion";

import EstimatorPickerItem from "./EstimatorPickerItem/EstimatorPickerItem";
import EstimatorSummary from "../EstimatorSummary/EstimatorSummary";

import designImg from "../assets/design-system.svg";
import graphicImg from "../assets/graphic-design.svg";
import pitchImg from "../assets/pitch-deck.svg";
import uiImg from "../assets/ui-design.svg";
import uxImg from "../assets/ux-design.svg";
import webImg from "../assets/web-design.svg";

export default function EstimatorPicker() {
  const [selectedServices, setSelectedServices] = useState([]);
  const services = [
    {
      id: 1,
      title: "UX Design",
      image: uxImg,
      cost: 1500,
    },
    {
      id: 2,
      title: "UI Design",
      image: uiImg,
      cost: 3000,
    },
    {
      id: 3,
      title: "Design System",
      image: designImg,
      cost: 3500,
    },
    {
      id: 4,
      title: "Web Design",
      image: webImg,
      cost: 2000,
    },
    {
      id: 5,
      title: "Graphic Design",
      image: graphicImg,
      cost: 1500,
    },
    {
      id: 6,
      title: "Pitch deck",
      image: pitchImg,
      cost: 1000,
    },
  ];

  function isSelected(id) {
    return selectedServices.includes(id);
  }

  function addService(id) {
    setSelectedServices([...selectedServices, id]);
  }

  function removeService(id) {
    const newArr = selectedServices.filter((service) => service != id);
    setSelectedServices([...newArr]);
  }

  function handleSelectService(id) {
    isSelected(id) ? removeService(id) : addService(id);
  }

  function getSelectedServices() {
    return services.filter((service) => isSelected(service.id));
  }

  return (
    <div className="estimator-picker">
      <h2>Pick Services</h2>
      <h4>Choose services that you need the estimate on</h4>
      <div className="estimator-picker__container">
        {services.map((service) => (
          <EstimatorPickerItem
            key={service.id}
            service={service}
            active={isSelected(service.id)}
            handleSelectService={handleSelectService}
          />
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        {selectedServices.length ? (
          <EstimatorSummary
            selected={getSelectedServices()}
            removeService={removeService}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
