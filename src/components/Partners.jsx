import React from "react";
import "../Styles/Partners.css";
import companyLogo from "../assets/cl.png";
import company1 from "../assets/c1.png";
import company2 from "../assets/c2.jpg";
import company3 from "../assets/c3.png";
import company4 from "../assets/c4.jpg";

const Partners = () => {
  const companies = [company1, company2, company3, company4];

  return (
    <div className="partners-section">
      <h2>Our Trusted Partners</h2>
      <div className="partners-container">
        {companies.map((company, index) => (
          <div key={index} className="partner-logo">
            <img src={company} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
