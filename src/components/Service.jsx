import React from "react";
import "../Styles/Services.css";
import { FaClipboardCheck, FaFileAlt, FaCalculator } from "react-icons/fa";


const Services = () => {

  const servicesSection = [
    {
      title: "Eligibility Screening",
      description:
        "Help your business identify which employees qualify for the Work Opportunity Tax Credit (WOTC). We provide thorough screening services to ensure you maximize your tax savings.",
      icon: <FaClipboardCheck className="service-icon" />,
    },
    {
      title: "Form 8850 Filing Assistance",
      description:
        "Simplify the process of filing IRS Form 8850. Our experts will guide you through the paperwork, ensuring compliance and timely submission to your state workforce agency.",
      icon: <FaFileAlt className="service-icon" />,
    },
    {
      title: "Tax Credit Calculation",
      description:
        "Calculate your potential savings with WOTC. Our tools and experts will help you estimate the tax credits your business can earn by hiring eligible employees.",
      icon: <FaCalculator className="service-icon" />,
    },
  ];

  return (
    <div className="services-section">
      <h2>Our WOTC Services</h2>
      <div className="services-container">
        {servicesSection.map((servicesSection, index) => (
          <div key={index} className="service-item">
            {servicesSection.icon}
            <h3>{servicesSection.title}</h3>
            <p>{servicesSection.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
