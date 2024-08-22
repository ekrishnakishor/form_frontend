import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/HowItWorks.css";

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = stepsRef.current.indexOf(entry.target) + 1;
            setCurrentStep(stepIndex);
          }
        });
      },
      { threshold: 0.6 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (stepsRef.current.length > 0) {
        stepsRef.current.forEach((step) => {
          if (step) observer.unobserve(step);
        });
      }
    };
  }, []);

  const steps = [
    "Identify Eligible Employees",
    "Complete IRS Form 8850",
    "Receive Certification",
    "Enjoy the Savings",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact) {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        message: formData.message || "No message provided", // Provide default if message is optional
      };
      emailjs
        .send(
          "service_e7j9lug", // service ID
          "template_n7vitw7", // template ID
          templateParams,
          "mlLd8nCbOXAuFpnSF" // user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSubmitted(true);
            setIsModalOpen(false);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      alert("Please fill all the required fields");
    }
  };

  return (
    <div className="how-it-works-container">
      <h2>How to Apply for WOTC?</h2>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-step ${
              currentStep >= index + 1 ? "visible" : ""
            }`}
            ref={(el) => (stepsRef.current[index] = el)}
          >
            <div className="step-line" />
            <div className="step-content">
              <div className="step-number">Step {index + 1}</div>
              <div className="step-description">
                {step}
                {index === 0 && (
                  <p>
                    Determine if your new hires belong to one of the WOTC target
                    groups.
                  </p>
                )}
                {index === 1 && (
                  <p>
                    File IRS Form 8850 with your state workforce agency within
                    28 days of the employee’s start date.
                  </p>
                )}
                {index === 2 && (
                  <p>
                    Once certified, claim the tax credit on your business’s
                    federal tax return.
                  </p>
                )}
                {index === 3 && (
                  <p>
                    Reduce your company’s federal tax liability and enjoy the
                    financial benefits of hiring diverse talent.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentStep === steps.length && (
        <button className="cta-button" onClick={() => setIsModalOpen(true)}>
          Start Application Process
        </button>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="button-flex-modal">
                <button className="submit-button" type="submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {submitted && (
        <div className="confirmation-message">
          We have received your message and will contact you shortly.
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
