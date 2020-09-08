import React, { useState } from "react";
import "./FAQContent.scss";

import FAQContentItem from "./FAQContentItem/FAQContentItem";

export default function FAQContent() {
  const [activeTab, setActiveTab] = useState(null);

  const content = [
    {
      id: 1,
      question: "Do I have to allow the use of cookies?",
      answer:
        "Yes, in order to use My Page, you must allow the use of cookies in your browser.",
    },
    {
      id: 2,
      question: "How do I change my My Page password?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl diam, vehicula ac ultricies vel, blandit sed erat. Fusce ornare, ex sed suscipit consectetur, nibh massa aliquet lorem, ac gravida nisi justo a mauris. Nunc nec ante lacus. Cras volutpat aliquam quam a sodales. Fusce consectetur lorem id ligula imperdiet vulputate. Nunc luctus feugiat tristique. Nunc rutrum urna non magna hendrerit, eget congue dolor euismod. In a feugiat nibh. Sed pretium et nisi eget tempus.",
    },
    {
      id: 3,
      question: "What is BankID?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, lacus at pellentesque finibus, lacus diam mattis orci, et lacinia lacus dolor gravida ipsum. Cras pulvinar purus turpis, ut molestie metus feugiat vitae. Curabitur eget diam id felis pretium faucibus quis vitae nisl. Nullam accumsan sapien id sem pharetra, at congue metus placerat. Fusce ac.",
    },
    {
      id: 4,
      question: "When do I receive a password ordered by letter?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in mauris quis dui rutrum maximus. Mauris at elit rhoncus, commodo tortor a, suscipit urna. Nam varius sagittis urna, eu condimentum tellus luctus a. Donec imperdiet.",
    },
    {
      id: 5,
      question: "What do I have to do to receive a password via SMS?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, lacus at pellentesque finibus, lacus diam mattis orci, et lacinia lacus dolor gravida ipsum. Cras pulvinar purus turpis, ut molestie metus feugiat vitae. Curabitur eget diam id felis pretium faucibus quis vitae nisl. Nullam accumsan sapien id sem pharetra, at congue metus placerat. Fusce ac.",
    },
    {
      id: 6,
      question: "I forgot my login details - what should I do?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in elementum mauris. Proin justo massa, ultrices vel interdum finibus, vulputate.",
    },
  ];

  return (
    <div className="faq-content">
      {content.map((item) => (
        <FAQContentItem
          key={item.id}
          item={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
}
