import React from "react";

export default function FAQContentItem({ item, activeTab, setActiveTab }) {
  function handleOpenClose(id) {
    activeTab == id ? setActiveTab(null) : setActiveTab(id);
  }

  return (
    <div className="faq-content__item" onClick={() => handleOpenClose(item.id)}>
      <h4>{item.question}</h4>
      <div
        className={
          activeTab == item.id
            ? "faq-content__answer"
            : "faq-content__answer faq-content__answer--close"
        }
      >
        <p>{item.answer}</p>
      </div>

      <div className="faq-content__icon">
        <i
          className={
            activeTab == item.id ? "fas fa-minus fa-2x" : "fas fa-plus fa-2x"
          }
        ></i>
      </div>
    </div>
  );
}
