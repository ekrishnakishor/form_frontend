import React, { useEffect, useState } from "react";
import "../Styles/companyDetails.css";
import Banner from "../assets/wall-image.jpg";
import SideImage from "../assets/wall-image-2.jpg";
import { FaPhone, FaSearch } from "react-icons/fa";

const CompanyDetails = () => {
  const words = [
    "Trusted by Millions",
    "Your One stop delivery partner",
    "Tagline for company",
    "Another tagline for company",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      const isWordComplete = currentLetterIndex === currentWord.length;

      if (isWordComplete) {
        setTimeout(() => {
          setCurrentText("");
          setCurrentLetterIndex(0);
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Pause before showing the next word
      } else {
        setCurrentText(
          (prevText) => prevText + currentWord[currentLetterIndex]
        );
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Time between each letter

    return () => clearTimeout(timeout);
  }, [currentLetterIndex, currentWordIndex, words]);

  return (
    <div>
      <div className="banner-container">
        <div className="banner-wall-img">
          <img src={Banner} alt="banner" />
          <div className="banner-content">
            <h1>Unlock Savings with the Work Opportunity Tax Credit (WOTC)</h1>
            <p>{currentText}</p>
            <a href="tel:+1123456789">
              <button className="contact-button">
                Contact Us
                <FaPhone className="phone-icon" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* New Section for WOTC Description */}
      <div className="wotc-section">
        <div className="wotc-text">
          <h2>What is the Work Opportunity Tax Credit (WOTC)?</h2>
          <p>
            The Work Opportunity Tax Credit (WOTC) is a federal tax incentive
            program designed to encourage businesses to hire individuals from
            certain targeted groups who face significant barriers to employment.
            By hiring eligible workers, your company can benefit from
            substantial tax credits while contributing to a more inclusive and
            diverse workforce.
          </p>
          {/* <button className="eligible-groups-button">
            See Eligible Groups
            <FaSearch className="search-icon" />
          </button> */}
        </div>
        <div className="wotc-image">
          <img src={SideImage} alt="WOTC Description" />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
