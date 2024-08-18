import React, { useState } from "react";
import "../Styles/FaqStyle.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the maximum credit I can receive?",
      answer:
        "The maximum credit ranges from $2,400 to $9,600, depending on the employee category.",
    },
    {
      question: "How long does it take to receive certification?",
      answer:
        "The certification process can vary by state but typically takes a few weeks.",
    },
    {
      question: "Can I claim WOTC for rehiring a former employee?",
      answer: "No, WOTC is only available for new hires.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>WOTC FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <h3>{faq.question}</h3>
              {activeIndex === index ? (
                <FaChevronUp className="faq-icon" />
              ) : (
                <FaChevronDown className="faq-icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
