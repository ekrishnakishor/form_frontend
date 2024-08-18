import React from "react";
import {
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaCalculator,
} from "react-icons/fa";
import "../Styles/BenefitsSection.css";
import WOTCCalculator from "./WOTCCalculator";

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <h2>Why Should Your Company Leverage WOTC?</h2>
      <div className="benefits-container">
        <div className="benefit-item">
          <div className="icon-circle">
            <FaDollarSign className="benefit-icon" />
          </div>
          <h3>Significant Tax Savings</h3>
          <p>
            For each eligible employee hired, your company can receive tax
            credits ranging from $2,400 to $9,600, depending on the employee
            category.
          </p>
        </div>

        <div className="benefit-item">
          <div className="icon-circle">
            <FaUsers className="benefit-icon" />
          </div>
          <h3>Access to a Diverse Talent Pool</h3>
          <p>
            By hiring from WOTC-eligible groups, you tap into a broad range of
            skills and experiences, fostering a more inclusive workplace.
          </p>
        </div>

        <div className="benefit-item">
          <div className="icon-circle">
            <FaChartLine className="benefit-icon" />
          </div>
          <h3>Reduce Hiring Costs</h3>
          <p>
            The tax credits can offset the costs associated with hiring and
            training new employees, providing financial relief to your HR
            budget.
          </p>
        </div>

        <div className="benefit-item">
          <div className="icon-circle">
            <FaHandshake className="benefit-icon" />
          </div>
          <h3>Improve Your Corporate Image</h3>
          <p>
            Participating in WOTC demonstrates your commitment to corporate
            social responsibility and inclusivity, enhancing your reputation
            among customers, clients, and investors.
          </p>
        </div>
      </div>
      <WOTCCalculator />
    </div>
  );
};

export default BenefitsSection;
