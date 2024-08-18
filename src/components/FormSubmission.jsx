// import React, { useState, useCallback } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Grid, TextField, Button } from '@mui/material';
// import "../Styles/formSubmission.css";
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import debounce from 'lodash/debounce';


// const FormSubmission = () => {
//   const { short_Code } = useParams();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [localInputs, setLocalInputs] = useState({});
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     name: "",
//     social_security_number: "",
//     street_address: "",
//     city: "",
//     zip_code: "",
//     county: "",
//     telephone: "",
//     date_of_birth: "",
//     email: "",
//     emp_start_date: "",
//     date_applied_job: "",
//     job_position: "",
//     starting_wage: 0,

//     received_conditional_certification: false,
//     received_tanf_assistance: false,
//     veteran_unemployed_6_months: false,
//     veteran_disabled_recently_discharged: false,
//     veteran_disabled_6_months_unemployed: false,
//     received_tanf_long_term: false,
//     unemployed_27_weeks: false,
//     worked_for_employer_before: false,

//     qualified_iv_a_recipient: false,
//     qualified_iv_primary_benefits_recipient_name: "",
//     qualified_iv_benefits_city_state: "",

//     qualified_veteran: false,
//     qualified_veteran_primary_benefits_recipient_name: "",
//     qualified_veteran_benefits_city_state: "",

//     qualified_ex_felon: false,
//     job_app_work_release_program: false,
//     felony_conviction_date: "",
//     felony_release_date: "",
//     federal_conviction: false,
//     state_conviction: false,
//     applicable_state: "",

//     designated_community_resident_RRC: false,
//     designated_community_resident_EZ: false,

//     vocational_rehabilitation_referral: false,
//     rehab_approved_state: false,
//     emp_network_work_program: false,
//     vet_affairs: false,

//     qualified_summer_youth_employee: false,

//     qualified_snap_recipient: false,
//     snap_primary_benefits_recipient_name: "",
//     snap_benefits_city_state: "",

//     qualified_ssi_recipient: false,

//     long_term_family_assistance_recipient: false,
//     primary_benefits_recipient_name: "",
//     benefits_city_state: "",

//     qualified_long_term_unemployment_recipient: false,
//     ui_claim_records_city_state: "",

//     supporting_doc_list: "",

//     signed_employer: false,
//     signed_employer_preparer: false,
//     swa: false,
//     job_applicant: false,
//     parent_gaurdian: false,

//     employee_signature: null,
//     date_signed: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   const handleBlur = (e) => {
//     if (!formData[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: 'This field is required',
//       });
//     }
//   };
  

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       employee_signature: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let validationErrors = {};
//     let valid = true;

//     // Check for required fields
//     [
//       "name",
//       "social_security_number",
//       "street_address",
//       "city",
//       "zip_code",
//       "telephone",
//       "job_position",
//       "starting_wage",
//     ].forEach((field) => {
//       if (!formData[field]) {
//         validationErrors[field] = "This field is required";
//         valid = false;
//       }
//     });

//     if (!valid) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Create FormData object
//     const formDataObj = new FormData();
//     for (const key in formData) {
//       formDataObj.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/company/${short_Code}/form/`,
//         formDataObj,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 201) {
//         setSuccessMessage("Form submitted successfully!");
//         setFormData({
//           name: "",
//           social_security_number: "",
//           street_address: "",
//           city: "",
//           zip_code: "",
//           county: "",
//           telephone: "",
//           date_of_birth: "",
//           email: "",
//           emp_start_date: "",
//           date_applied_job: "",
//           job_position: "",
//           starting_wage: 0,
//           received_conditional_certification: false,
//           received_tanf_assistance: false,
//           veteran_unemployed_6_months: false,
//           veteran_disabled_recently_discharged: false,
//           veteran_disabled_6_months_unemployed: false,
//           received_tanf_long_term: false,
//           unemployed_27_weeks: false,
//           worked_for_employer_before: false,
//           qualified_iv_a_recipient: false,
//           qualified_iv_primary_benefits_recipient_name: "",
//           qualified_iv_benefits_city_state: "",
//           qualified_veteran: false,
//           qualified_veteran_primary_benefits_recipient_name: "",
//           qualified_veteran_benefits_city_state: "",
//           qualified_ex_felon: false,
//           job_app_work_release_program: false,
//           felony_conviction_date: "",
//           felony_release_date: "",
//           federal_conviction: false,
//           state_conviction: false,
//           applicable_state: "",
//           designated_community_resident_RRC: false,
//           designated_community_resident_EZ: false,
//           vocational_rehabilitation_referral: false,
//           rehab_approved_state: false,
//           emp_network_work_program: false,
//           vet_affairs: false,
//           qualified_summer_youth_employee: false,
//           qualified_snap_recipient: false,
//           snap_primary_benefits_recipient_name: "",
//           snap_benefits_city_state: "",
//           qualified_ssi_recipient: false,
//           long_term_family_assistance_recipient: false,
//           primary_benefits_recipient_name: "",
//           benefits_city_state: "",
//           qualified_long_term_unemployment_recipient: false,
//           ui_claim_records_city_state: "",
//           supporting_doc_list: "",
//           signed_employer: false,
//           signed_employer_preparer: false,
//           swa: false,
//           job_applicant: false,
//           parent_gaurdian: false,
//           employee_signature: null,
//           date_signed: "",
//         });
//       }
//     } catch (error) {
//       console.error("There was an error submitting the form!", error);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < 4) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleRadioChange = (e) => {
//     setFormData({ ...formData, rehire: e.target.value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(formData);
//   // };

//   const Page1 = () => (
//     <>
//              <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.name}
//             helperText={errors.name}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="SSN"
//             name="social_security_number"
//             value={formData.social_security_number}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.social_security_number}
//             helperText={errors.social_security_number}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Street Address"
//             name="street_address"
//             value={formData.street_address}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.street_address}
//             helperText={errors.street_address}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="City"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.city}
//             helperText={errors.city}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Zip Code"
//             name="zip_code"
//             value={formData.zip_code}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.zip_code}
//             helperText={errors.zip_code}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="County"
//             name="county"
//             value={formData.county}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.county}
//             helperText={errors.county}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Telephone"
//             name="telephone"
//             value={formData.telephone}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.telephone}
//             helperText={errors.telephone}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Date of Birth"
//             type="date"
//             name="date_of_birth"
//             value={formData.date_of_birth}
//             onChange={handleChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             onBlur={handleBlur}
//             error={!!errors.date_of_birth}
//             helperText={errors.date_of_birth}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.email}
//             helperText={errors.email}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Employee Start Date"
//             type="date"
//             name="emp_start_date"
//             value={formData.emp_start_date}
//             onChange={handleChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             onBlur={handleBlur}
//             error={!!errors.emp_start_date}
//             helperText={errors.emp_start_date}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Date Applied"
//             type="date"
//             name="date_applied_job"
//             value={formData.date_applied_job}
//             onChange={handleChange}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             onBlur={handleBlur}
//             error={!!errors.date_applied_job}
//             helperText={errors.date_applied_job}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Job Position"
//             name="job_position"
//             value={formData.job_position}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.job_position}
//             helperText={errors.job_position}
//             required
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             fullWidth
//             label="Starting Wage"
//             name="starting_wage"
//             type="number"
//             value={formData.starting_wage}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={!!errors.starting_wage}
//             helperText={errors.starting_wage}
//             required
//           />
//         </Grid>
//       </Grid>
//     </>
//   );

//   const Page2 = () => (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           name="received_conditional_certification"
//           checked={formData.received_conditional_certification}
//           onChange={handleChange}
//         />
//         Check here if you received a conditional certification from the state
//         workforce agency (SWA) or a participating local agency for the work
//         opportunity credit.
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="received_tanf_assistance"
//           checked={formData.received_tanf_assistance}
//           onChange={handleChange}
//         />
//         Check here if any of the following statements apply to you. <br /> • I am a
//         member of a family that has received assistance from Temporary
//         Assistance for Needy Families (TANF) for any 9 months during the past 18
//         months. <br /> • I am a veteran and a member of a family that received
//         Supplemental Nutrition Assistance Program (SNAP) benefits (food stamps)
//         for at least a 3-month period during the past 15 months. <br /> • I was
//         referred here by a rehabilitation agency approved by the state, an
//         employment network under the Ticket to Work program, or the Department
//         of Veterans Affairs. <br /> • I am at least age 18 but not age 40 or older and
//         I am a member of a family that: <br /> a. Received SNAP benefits (food stamps)
//         for the past 6 months; or <br /> b. Received SNAP benefits (food stamps) for at
//         least 3 of the past 5 months, but is no longer eligible to receive them. <br />
//         • During the past year, I was convicted of a felony or released from
//         prison for a felony. <br /> • I received supplemental security income (SSI)
//         benefits for any month ending during the past 60 days. <br /> • I am a veteran
//         and I was unemployed for a period or periods totaling at least 4 weeks
//         but less than 6 months during the past year
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="veteran_unemployed_6_months"
//           checked={formData.veteran_unemployed_6_months}
//           onChange={handleChange}
//         />
//         Check here if you are a veteran and you were unemployed for a period or
//         periods totaling at least 6 months during the past year.
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="veteran_disabled_recently_discharged"
//           checked={formData.veteran_disabled_recently_discharged}
//           onChange={handleChange}
//         />
//         Check here if you are a veteran entitled to compensation for a
//         service-connected disability and you were discharged or released from
//         active duty in the U.S. Armed Forces during the past year
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="veteran_disabled_6_months_unemployed"
//           checked={formData.veteran_disabled_6_months_unemployed}
//           onChange={handleChange}
//         />
//         Check here if you are a veteran entitled to compensation for a
//         service-connected disability and you were unemployed for a period or
//         periods totaling at least 6 months during the past year.
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="received_tanf_long_term"
//           checked={formData.received_tanf_long_term}
//           onChange={handleChange}
//         />
//         Check here if you are a member of a family that: • Received TANF
//         payments for at least the past 18 months; or • Received TANF payments
//         for any 18 months beginning after August 5, 1997, and the earliest
//         18-month period beginning after August 5, 1997, ended during the past 2
//         years; or • Stopped being eligible for TANF payments during the past 2
//         years because federal or state law limited the maximum time those
//         payments could be made.
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="unemployed_27_weeks"
//           checked={formData.unemployed_27_weeks}
//           onChange={handleChange}
//         />
//         Check here if you are in a period of unemployment that is at least 27
//         consecutive weeks and for all or part of that period you received
//         unemployment compensation.
//       </label>
//       <br />
//     </>
//   );

//   const Page3 = () => (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           name="worked_for_employer_before"
//           checked={formData.worked_for_employer_before}
//           onChange={handleChange}
//         />
//         Have you worked for this employer before?
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="qualified_iv_a_recipient"
//           checked={formData.qualified_iv_a_recipient}
//           onChange={handleChange}
//         />
//         Qualified IV-A Recipient Check here if the job applicant is a Qualified
//         IV-A Recipient
//       </label>
//       <br />
//       {formData.qualified_iv_a_recipient && (
//         <>
//           <input
//             type="text"
//             name="primary_benefits_recipient_name"
//             value={formData.qualified_iv_primary_benefits_recipient_name}
//             onChange={handleChange}
//             placeholder="Primary Benefits Recipient Name"
//           />
//           <br />
//           <input
//             type="text"
//             name="primary_benefits_recipient_name"
//             value={formData.qualified_iv_benefits_city_state}
//             onChange={handleChange}
//             placeholder="State and City"
//           />
//           <br />
//         </>
//       )}

//       <label>
//         <input
//           type="checkbox"
//           name="qualified_veteran"
//           checked={formData.qualified_veteran}
//           onChange={handleChange}
//         />
//         Qualified Veteran
//       </label>
//       <br />
//       {formData.qualified_veteran && (
//         <>
//           <input
//             type="text"
//             name="primary_benefits_recipient_name"
//             value={formData.qualified_veteran_primary_benefits_recipient_name}
//             onChange={handleChange}
//             placeholder="Primary Benefits Recipient Name"
//           />
//           <br />
//           <input
//             type="text"
//             name="primary_benefits_recipient_name"
//             value={formData.qualified_veteran_benefits_city_state}
//             onChange={handleChange}
//             placeholder="State and City"
//           />
//           <br />
//         </>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           name="qualified_ex_felon"
//           checked={formData.qualified_ex_felon}
//           onChange={handleChange}
//         />
//         Qualified Ex-Felon
//       </label>
//       <br />
//       {formData.qualified_ex_felon && (
//         <>
//           <label>
//             <input
//               type="checkbox"
//               name="qualified_ex_felon"
//               checked={formData.job_app_work_release_program}
//               onChange={handleChange}
//             />
//             Job application work release program
//           </label>
//           <br />
//           <input
//             type="date"
//             name="felony_conviction_date"
//             value={formData.felony_conviction_date}
//             onChange={handleChange}
//             placeholder="Felony Conviction Date"
//           />
//           <br />
//           <input
//             type="date"
//             name="felony_release_date"
//             value={formData.felony_release_date}
//             onChange={handleChange}
//             placeholder="Felony Release Date"
//           />
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="federal_conviction"
//               checked={formData.federal_conviction}
//               onChange={handleChange}
//             />
//             federal_conviction
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="state_conviction"
//               checked={formData.state_conviction}
//               onChange={handleChange}
//             />
//             state_conviction
//           </label>
//           <br />
//           <input
//             type="text"
//             name="applicable_state"
//             value={formData.applicable_state}
//             onChange={handleChange}
//             placeholder="applicable_state"
//           />
//           <br />
//         </>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           name="designated_community_resident_RRC"
//           checked={formData.designated_community_resident_RRC}
//           onChange={handleChange}
//         />
//         Designated Community Resident RRC
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="designated_community_resident_EZ"
//           checked={formData.designated_community_resident_EZ}
//           onChange={handleChange}
//         />
//         designated_community_resident_EZ
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="vocational_rehabilitation_referral"
//           checked={formData.vocational_rehabilitation_referral}
//           onChange={handleChange}
//         />
//         Vocational Rehabilitation Referral
//       </label>
//       <br />
//       {formData.vocational_rehabilitation_referral && (
//         <>
//           <label>
//             <input
//               type="checkbox"
//               name="rehab_approved_state"
//               checked={formData.rehab_approved_state}
//               onChange={handleChange}
//             />
//             rehab_approved_state
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="emp_network_work_program"
//               checked={formData.emp_network_work_program}
//               onChange={handleChange}
//             />
//             emp_network_work_program
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkbox"
//               name="vet_affairs"
//               checked={formData.vet_affairs}
//               onChange={handleChange}
//             />
//             vet_affairs
//           </label>
//           <br />
//         </>
//       )}

//       <label>
//         <input
//           type="checkbox"
//           name="qualified_summer_youth_employee"
//           checked={formData.qualified_summer_youth_employee}
//           onChange={handleChange}
//         />
//         Qualified Summer Youth Employee
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="qualified_snap_recipient"
//           checked={formData.qualified_snap_recipient}
//           onChange={handleChange}
//         />
//         Qualified SNAP Recipient
//       </label>
//       <br />
//       {formData.qualified_snap_recipient && (
//         <>
//           <input
//             type="text"
//             name="snap_primary_benefits_recipient_name"
//             value={formData.snap_primary_benefits_recipient_name}
//             onChange={handleChange}
//             placeholder="snap_primary_benefits_recipient_name"
//           />
//           <br />
//           <input
//             type="text"
//             name="snap_benefits_city_state"
//             value={formData.snap_benefits_city_state}
//             onChange={handleChange}
//             placeholder="State and City"
//           />
//           <br />
//         </>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           name="qualified_ssi_recipient"
//           checked={formData.qualified_ssi_recipient}
//           onChange={handleChange}
//         />
//         Qualified Supplemental Security Income (SSI) Recipient Check here if the
//         job applicant received or is receiving Supplemental Security Income
//         (SSI)
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="long_term_family_assistance_recipient"
//           checked={formData.long_term_family_assistance_recipient}
//           onChange={handleChange}
//         />
//         Long Term Family Assistance Recipient
//       </label>
//       <br />
//       {formData.long_term_family_assistance_recipient && (
//         <>
//           <input
//             type="text"
//             name="snap_primary_benefits_recipient_name"
//             value={formData.primary_benefits_recipient_name}
//             onChange={handleChange}
//             placeholder="primary_benefits_recipient_name"
//           />
//           <br />
//           <input
//             type="text"
//             name="benefits_city_state"
//             value={formData.benefits_city_state}
//             onChange={handleChange}
//             placeholder="State and City"
//           />
//           <br />
//         </>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           name="qualified_long_term_unemployment_recipient"
//           checked={formData.qualified_long_term_unemployment_recipient}
//           onChange={handleChange}
//         />
//         Qualified Long-Term Unemployment Recipient Check here if the job
//         applicant is a qualified long-term unemployment recipient (LTUR)
//       </label>
//       <br />
//       <label>
//         Enter city and state(s) where UI claim records / UI wage records were
//         filed
//         <input
//           type="text"
//           name="ui_claim_records_city_state"
//           value={formData.ui_claim_records_city_state}
//           onChange={handleChange}
//           placeholder="UI Claim Records City & State"
//         />
//       </label>
//       <br />

//       <input
//         type="text"
//         name="supporting_doc_list"
//         value={formData.supporting_doc_list}
//         onChange={handleChange}
//         placeholder="Supporting doc Submitted"
//       />
//       <br />
//     </>
//   );

//   const Page4 = () => (
//     <>
//       <label>Signed by who?</label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="signed_employer"
//           checked={formData.signed_employer}
//           onChange={handleChange}
//         />
//         signed_employer
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="signed_employer_preparer"
//           checked={formData.signed_employer_preparer}
//           onChange={handleChange}
//         />
//         signed_employer_preparer
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="swa"
//           checked={formData.swa}
//           onChange={handleChange}
//         />
//         swa
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="job_applicant"
//           checked={formData.job_applicant}
//           onChange={handleChange}
//         />
//         job_applicant
//       </label>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           name="parent_gaurdian"
//           checked={formData.parent_gaurdian}
//           onChange={handleChange}
//         />
//         parent_gaurdian
//       </label>
//       <br />
//       <input
//         type="file"
//         name="employee_signature"
//         onChange={handleFileChange}
//       />
//       <br />
//       <input
//         type="date"
//         name="date_signed"
//         value={formData.date_signed}
//         onChange={handleChange}
//         placeholder="Date Signed"
//       />
//       <br />
//     </>
//   );

//   return (
//     <div className="main-container">
//       <div className="form-container">
//         <h1>Form Submission</h1>
//         {successMessage && <p style = {{color: 'red'}}>{successMessage}</p>}
//         {/* <form onSubmit={handleSubmit}>

//         {/* Page-1 */}

//         {/* Page 2 */}

//         {/* Page 3 */}

//         {/* <button type="submit">Submit</button>\ */}
//         {/* Page 4 
//         </form> */}
//         <form onSubmit={handleSubmit}>
//           {currentPage === 1 && <Page1 />}
//           {currentPage === 2 && <Page2 />}
//           {currentPage === 3 && <Page3 />}
//           {currentPage === 4 && <Page4 />}

//           <div className="navigation-buttons">
//             {currentPage > 1 && (
//               <button type="button" onClick={prevPage}>
//                 Previous
//               </button>
//             )}
//             {currentPage < 4 && (
//               <button type="button" onClick={nextPage}>
//                 Next
//               </button>
//             )}
//             {currentPage === 4 && (
//               <Button
//                 sx={{ width: "20%", height: "15%" }}
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//               >
//                 Submit
//               </Button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormSubmission;
