import React, { useState } from "react";
import Modal from "react-modal";
import ReactSlider from "react-slider";
import { FaCalculator } from "react-icons/fa";
import "../Styles/WOTCCalculator.css";

const WOTCCalculator = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [employees, setEmployees] = useState(50);
  const [turnover, setTurnover] = useState(5);
  const [wotcPercentage, setWotcPercentage] = useState(10);
  const [avgTaxCredit, setAvgTaxCredit] = useState(2400);
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const qualifiedEmployees = Math.ceil((employees * wotcPercentage) / 100);
    const calculatedSavings = qualifiedEmployees * avgTaxCredit;
    setSavings(calculatedSavings);
  };

  const handleSubmit = () => {
    const savings = calculateSavings();
    alert(`Your estimated annual savings is $${savings.toLocaleString()}`);
  };

  return (
    <div>
      <button className="cta-button" onClick={() => setModalIsOpen(true)}>
        Calculate Your Savings
        <FaCalculator className="calculator-icon" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="WOTC Savings Calculator"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>WOTC Savings Calculator</h2>

        <div className="input-group">
          <label>Number of Active Employees</label>
          <ReactSlider
            value={employees}
            onChange={setEmployees}
            min={0}
            max={1000}
          />
          <input
            type="number"
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Yearly Turnover (%)</label>
          <ReactSlider
            value={turnover}
            onChange={setTurnover}
            min={0}
            max={100}
          />
          <input
            type="number"
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Percentage of Qualified WOTC Employees (%)</label>
          <ReactSlider
            value={wotcPercentage}
            onChange={setWotcPercentage}
            min={0}
            max={100}
          />
          <input
            type="number"
            value={wotcPercentage}
            onChange={(e) => setWotcPercentage(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Average Tax Credit per Employee ($)</label>
          <ReactSlider
            value={avgTaxCredit}
            onChange={setAvgTaxCredit}
            min={0}
            max={9600}
          />
          <input
            type="number"
            value={avgTaxCredit}
            onChange={(e) => setAvgTaxCredit(e.target.value)}
          />
        </div>
        <div className="calc-buttons">
          {" "}
          <button className="wotc-submit-button" onClick={handleSubmit}>
            Calculate Savings
          </button>
          <button
            className="wotc-close-button"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
        {savings !== null && (
          <h3>Your estimated annual savings is ${savings.toLocaleString()}</h3>
        )}
      </Modal>
    </div>
  );
};

export default WOTCCalculator;
