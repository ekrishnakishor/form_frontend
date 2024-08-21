import React, { useState } from "react";
import ApplicantInfo from "./EmployeeForms/ApplicantInfo";
import WOTCQuestionnaire from "./EmployeeForms/WOTCQuestionnaire";
import SignAndSubmit from "./EmployeeForms/SignAndSubmit";
import { Button, Container, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "../Styles/formSubmission.css";

const EmployeeFormSubmission = () => {
  const navigate = useNavigate();
  const { short_Code } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    social_security_number: "",
    street_address: "",
    city: "",
    zip_code: "",
    county: "",
    telephone: "",
    date_of_birth: "",
    email: "",
    emp_start_date: "",
    date_applied_job: "",
    job_position: "",
    starting_wage: 0,

    received_conditional_certification: undefined,
    received_tanf_assistance: undefined,
    tanf_benefits_detail: undefined,
    tanf_primary_benefits_recipient_name: "",
    tanf_benefits_city_state: "",
    veteran_unemployed_6_months: undefined,
    veteran_disabled_recently_discharged: undefined,
    veteran_disabled_6_months_unemployed: undefined,
    received_tanf_long_term: undefined,
    unemployed_27_weeks: undefined,
    worked_for_employer_before: undefined,
    unemp_start_date: "",
    unemp_benifits: "",
    discharged_active_duty: undefined,
    snap_atleat_three_months: undefined,
    unemp_atleat_six_months: undefined,
    unemp_less_than_six_months: undefined,

    qualified_iv_a_recipient: undefined,
    qualified_iv_primary_benefits_recipient_name: "",
    qualified_iv_benefits_city_state: "",

    qualified_veteran: undefined,
    qualified_veteran_primary_benefits_recipient_name: "",
    qualified_veteran_benefits_city_state: "",

    qualified_ex_felon: undefined,
    job_app_work_release_program: undefined,
    felony_conviction_date: "",
    felony_release_date: "",
    federal_conviction: undefined,
    state_conviction: undefined,
    applicable_state: "",

    designated_community_resident_RRC: undefined,
    designated_community_resident_EZ: undefined,

    vocational_rehabilitation_referral: undefined,
    rehab_approved_state: undefined,
    emp_network_work_program: undefined,
    vet_affairs: undefined,

    qualified_summer_youth_employee: undefined,

    qualified_snap_recipient: undefined,
    snap_primary_benefits_recipient_name: "",
    snap_benefits_city_state: "",
    snap_benifits: undefined,

    qualified_ssi_recipient: undefined,

    long_term_family_assistance_recipient: undefined,
    primary_benefits_recipient_name: "",
    benefits_city_state: "",

    qualified_long_term_unemployment_recipient: undefined,
    ui_claim_records_city_state: "",

    supporting_doc_list: "",

    signed_employer: undefined,
    signed_employer_preparer: undefined,
    swa: undefined,
    job_applicant: undefined,
    parent_gaurdian: false,

    employee_signature: null,
    date_signed: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const fieldErrors = validateField(name, value);
    setErrors({ ...errors, ...fieldErrors });
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};

    // Ensure the value is a string before calling trim()
    const stringValue = value ? String(value).trim() : "";

    switch (fieldName) {
      case "name":
      case "street_address":
      case "city":
      case "job_position":
        if (!stringValue) {
          fieldErrors[fieldName] = "This field is required";
        }
        break;
      case "social_security_number":
        if (!stringValue) {
          fieldErrors[fieldName] = "SSN is required";
        } else if (!/^\d{3}-?\d{2}-?\d{4}$/.test(stringValue)) {
          fieldErrors[fieldName] = "Invalid SSN format";
        }
        break;
      case "zip_code":
        if (!stringValue) {
          fieldErrors[fieldName] = "Zip code is required";
        } else if (!/^\d{5}$/.test(stringValue)) {
          fieldErrors[fieldName] = "Invalid zip code";
        }
        break;
      case "telephone":
        if (!stringValue) {
          fieldErrors[fieldName] = "Telephone is required";
        } else if (!/^\d{3}-?\d{3}-?\d{4}$/.test(stringValue)) {
          fieldErrors[fieldName] = "Invalid phone number format";
        }
        break;
      case "email":
        if (!stringValue) {
          fieldErrors[fieldName] = "Email is required";
        }
        else if (stringValue && !/\S+@\S+\.\S+/.test(stringValue)) {
          fieldErrors[fieldName] = "Invalid email format";
        }
        break;
      case "date_of_birth":
        if (!stringValue) {
          fieldErrors[fieldName] = "Date of Birth is required is required";
        }
        else if (stringValue && !isValidDate(stringValue)) {
          fieldErrors[fieldName] = "Invalid date";
        }
        break;
      case "emp_start_date":
        if (!stringValue) {
          fieldErrors[fieldName] = "Employee Start Date is required";
        }
        else if (stringValue && !isValidDate(stringValue)) {
          fieldErrors[fieldName] = "Invalid date";
        }
        break;
      case "date_applied_job":
        if (!stringValue) {
          fieldErrors[fieldName] = "Date applied is required";
        }
        else if (stringValue && !isValidDate(stringValue)) {
          fieldErrors[fieldName] = "Invalid date";
        }
        break;
      case "starting_wage":
        if (!stringValue) {
          fieldErrors[fieldName] = "Starting wage is required";
        } else if (parseFloat(stringValue) <= 0) {
          fieldErrors[fieldName] = "Starting wage must be a positive number";
        }
        break;
      default:
        break;
    }

    return fieldErrors;
  };

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      const fieldErrors = validateField(fieldName, formData[fieldName]);
      Object.assign(newErrors, fieldErrors);
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextPage = () => {
    if (validateForm()) {
      setCurrentPage(currentPage + 1);
    } else {
      setSnackbarMessage("Please fill in all required fields correctly.");
      setOpenSnackbar(true);
    }
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSnackbarMessage("Please fill in all required fields correctly.");
      setOpenSnackbar(true);
      return;
    }

    try {
      const formDataObj = new FormData();
      // for (const key in formData) {
      //   formDataObj.append(key, formData[key]);
      // }
      const processedFormData = {
        ...formData,
        // qualified_snap_recipient: formData.qualified_snap_recipient ?? false,
        received_conditional_certification:
          formData.received_conditional_certification ?? false,
        received_tanf_assistance: formData.received_tanf_assistance ?? false,
        tanf_benefits_detail: formData.tanf_benefits_detail ?? false,
        veteran_unemployed_6_months:
          formData.veteran_unemployed_6_months ?? false,
        veteran_disabled_recently_discharged:
          formData.veteran_disabled_recently_discharged ?? false,
        veteran_disabled_6_months_unemployed:
          formData.veteran_disabled_6_months_unemployed ?? false,
        received_tanf_long_term: formData.received_tanf_long_term ?? false,
        unemployed_27_weeks: formData.unemployed_27_weeks ?? false,
        discharged_active_duty: formData.discharged_active_duty ?? false,
        snap_atleat_three_months: formData.snap_atleat_three_months ?? false,
        unemp_atleat_six_months: formData.unemp_atleat_six_months ?? false,
        unemp_less_than_six_months:
          formData.unemp_less_than_six_months ?? false,
        worked_for_employer_before:
          formData.worked_for_employer_before ?? false,
        qualified_iv_a_recipient: formData.qualified_iv_a_recipient ?? false,
        qualified_veteran: formData.qualified_veteran ?? false,
        qualified_ex_felon: formData.qualified_ex_felon ?? false,
        job_app_work_release_program:
          formData.job_app_work_release_program ?? false,
        federal_conviction: formData.federal_conviction ?? false,
        state_conviction: formData.state_conviction ?? false,
        designated_community_resident_RRC:
          formData.designated_community_resident_RRC ?? false,
        designated_community_resident_EZ:
          formData.designated_community_resident_EZ ?? false,
        vocational_rehabilitation_referral:
          formData.vocational_rehabilitation_referral ?? false,
        rehab_approved_state: formData.rehab_approved_state ?? false,
        emp_network_work_program: formData.emp_network_work_program ?? false,
        vet_affairs: formData.vet_affairs ?? false,
        qualified_summer_youth_employee:
          formData.qualified_summer_youth_employee ?? false,
        qualified_snap_recipient: formData.qualified_snap_recipient ?? false,
        snap_benifits: formData.snap_benifits ?? false,
        qualified_ssi_recipient: formData.qualified_ssi_recipient ?? false,
        long_term_family_assistance_recipient:
          formData.long_term_family_assistance_recipient ?? false,
        qualified_long_term_unemployment_recipient:
          formData.qualified_long_term_unemployment_recipient ?? false,
        signed_employer: formData.signed_employer ?? false,
        signed_employer_preparer: formData.signed_employer_preparer ?? false,
        swa: formData.swa ?? false,
        job_applicant: formData.job_applicant ?? false,
        parent_gaurdian: formData.parent_gaurdian ?? false,
      };

      for (const key in processedFormData) {
        formDataObj.append(key, processedFormData[key]);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/AmazonDSP/${short_Code}/8850/`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setSnackbarMessage("Form submitted successfully!");
        setOpenSnackbar(true);

              // Send email using emailjs
      const templateParams = {
       
        to_name: "Sarar Agarwal", 
        from_name: "wotcbiz.com", 
        message: `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.telephone}`, 
      };

      emailjs
      .send(
        "service_e7j9lug", // service ID
        "template_6jyloyb", // template ID
        templateParams,
        "6Q7nUa-NZ72mkT9JT" // user ID
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
        // Redirect to the home page after successful submission
        // Wait for 3 seconds before redirecting
        setTimeout(() => {
          navigate("/");
        }, 3000);
        // Reset form data
        setFormData({
          name: "",
          social_security_number: "",
          street_address: "",
          city: "",
          zip_code: "",
          county: "",
          telephone: "",
          date_of_birth: "",
          email: "",
          emp_start_date: "",
          date_applied_job: "",
          job_position: "",
          starting_wage: 0,
          received_conditional_certification: undefined,
          received_tanf_assistance: undefined,
          tanf_benefits_detail: undefined,
          tanf_primary_benefits_recipient_name: "",
          tanf_benefits_city_state: "",
          veteran_unemployed_6_months: undefined,
          veteran_disabled_recently_discharged: undefined,
          veteran_disabled_6_months_unemployed: undefined,
          received_tanf_long_term: undefined,
          unemployed_27_weeks: undefined,
          unemp_start_date: "",
          unemp_benifits: "",
          discharged_active_duty: undefined,
          snap_atleat_three_months: undefined,
          unemp_atleat_six_months: undefined,
          unemp_less_than_six_months: undefined,
          worked_for_employer_before: undefined,
          qualified_iv_a_recipient: undefined,
          qualified_iv_primary_benefits_recipient_name: "",
          qualified_iv_benefits_city_state: "",
          qualified_veteran: undefined,
          qualified_veteran_primary_benefits_recipient_name: "",
          qualified_veteran_benefits_city_state: "",
          qualified_ex_felon: undefined,
          job_app_work_release_program: undefined,
          felony_conviction_date: "",
          felony_release_date: "",
          federal_conviction: undefined,
          state_conviction: undefined,
          applicable_state: "",
          designated_community_resident_RRC: undefined,
          designated_community_resident_EZ: undefined,
          vocational_rehabilitation_referral: undefined,
          rehab_approved_state: undefined,
          emp_network_work_program: undefined,
          vet_affairs: undefined,
          qualified_summer_youth_employee: undefined,
          qualified_snap_recipient: undefined,
          snap_primary_benefits_recipient_name: "",
          snap_benefits_city_state: "",
          snap_benifits: undefined,
          qualified_ssi_recipient: undefined,
          long_term_family_assistance_recipient: undefined,
          primary_benefits_recipient_name: "",
          benefits_city_state: "",
          qualified_long_term_unemployment_recipient: undefined,
          ui_claim_records_city_state: "",
          supporting_doc_list: "",
          signed_employer: undefined,
          signed_employer_preparer: undefined,
          swa: undefined,
          job_applicant: undefined,
          parent_gaurdian: undefined,
          employee_signature: null,
          date_signed: "",
        });
      } else {
        setSnackbarMessage("There was an issue with your submission.");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setSnackbarMessage("There was an error submitting the form.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <div>
      <Container maxWidth="md">
        <form className="form-submission-class" onSubmit={handleSubmit}>
          {currentPage === 1 && (
            <ApplicantInfo
              formData={formData}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
            />
          )}
          {currentPage === 2 && (
            <WOTCQuestionnaire
              formData={formData}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
            />
          )}
          {currentPage === 3 && (
            <SignAndSubmit
              formData={formData}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
            />
          )}

          <div className="navigation-buttons">
            {currentPage > 1 && (
              <Button
                type="button"
                variant="outlined"
                color="primary"
                onClick={prevPage}
              >
                Previous
              </Button>
            )}
            {currentPage < 3 && (
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={nextPage}
              >
                Next
              </Button>
            )}
            {currentPage === 3 && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="info">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default EmployeeFormSubmission;
