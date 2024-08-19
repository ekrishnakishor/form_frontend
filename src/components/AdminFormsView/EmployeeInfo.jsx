// ApplicantInfo.jsx
import React from "react";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  useMediaQuery,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import "../../Styles/formSubmission.css";


const EmployeeInfo = ({company,employeeDetails}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    let worked_here_before = false;
    if (employeeDetails) {
      worked_here_before = employeeDetails[0].worked_for_employer_before
        ? true
        : false;
    }
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Applicant Information
      </Typography>
      <Grid className="grid-form-submission" container spacing={2} direction={isMobile ? "column" : "row"}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={employeeDetails[0].name || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="SSN"
            name="social_security_number"
            value={employeeDetails[0].social_security_number || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street Address"
            name="street_address"
            value={employeeDetails[0].street_address || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={employeeDetails[0].city || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Zip Code"
            name="zip_code"
            value={employeeDetails[0].zip_code || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            {/* <InputLabel htmlFor="county">
              State
              <span style={{ color: "red" }}>*</span>
            </InputLabel> */}
                      <TextField
            fullWidth
            label="county"
            name="county"
            value={employeeDetails[0].county || ""}
            InputProps={{
                readOnly: true,
              }}
          />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Telephone"
            name="telephone"
            value={employeeDetails[0].telephone || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            name="date_of_birth"
            value={employeeDetails[0].date_of_birth || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={employeeDetails[0].email || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Employee Start Date"
            name="emp_start_date"
            value={employeeDetails[0].emp_start_date || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Date Applied"
            name="date_applied_job"
            value={employeeDetails[0].date_applied_job || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Job Position"
            name="job_position"
            value={employeeDetails[0].job_position || ""}
            InputProps={{
                readOnly: true,
              }}

          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Starting Wage"
            name="starting_wage"
            type="number"
            value={employeeDetails[0].starting_wage || ""}
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
              Have you worked here before? 
            </FormLabel>
            <RadioGroup
              aria-label="worked_for_employer_before-benefits"
              name="worked_for_employer_before"
              value={
                employeeDetails[0].worked_for_employer_before === undefined
                  ? ""
                  : employeeDetails[0].worked_for_employer_before
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom>
        WOTC Questionnaire
      </Typography>
      <Grid container spacing={2}>
        {/* SNAP Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
              I am a member of a family that received{" "}
              <strong>SNAP Benefits</strong> (food stamps) for the past 6
              months:
            </FormLabel>
            <RadioGroup
              aria-label="snap-benefits"
              name="qualified_snap_recipient"
              value={
                employeeDetails[0].qualified_snap_recipient === undefined
                  ? ""
                  : employeeDetails[0].qualified_snap_recipient
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        {employeeDetails[0].qualified_snap_recipient && (
          <Grid item xs={12}>
            <RadioGroup
              aria-label="snap-benefits-detail"
              name="snap_benefits_detail"
              value={
                employeeDetails[0].snap_benefits_detail === undefined
                  ? ""
                  : employeeDetails[0].snap_benefits_detail
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="For the 6 months before you were hired?"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Or, for at least 3 of the past 5 months, but you are no longer receiving them?"
              />
            </RadioGroup>
            <TextField
              label="Primary Recipient Name:"
              name="snap_primary_benefits_recipient_name"
              value={employeeDetails[0].snap_primary_benefits_recipient_name || ""}
              fullWidth
            />
            <TextField
              label="City / State where benefits received:"
              name="snap_benefits_city_state"
              value={employeeDetails[0].snap_benefits_city_state || ""}
              fullWidth
            />
          </Grid>
        )}

        {/* TANF Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
              I am a member of a family that received assistance from Temporary
              Assistance (<strong>TANF</strong>):
            </FormLabel>
            <RadioGroup
              aria-label="snap-benefits"
              name="received_tanf_assistance"
              value={
                employeeDetails[0].received_tanf_assistance === undefined
                  ? ""
                  : employeeDetails[0].received_tanf_assistance
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        {employeeDetails[0].received_tanf_assistance === "1" && (
          <Grid item xs={12}>
            <FormControl
              component="fieldset"
            >
              <FormLabel component="legend">
                TANF (Temporary Assistance for Needy Families) Benefits
              </FormLabel>
              <RadioGroup
                aria-label="tanf-benefits-detail"
                name="tanf_benefits_detail"
                value={employeeDetails[0].tanf_benefits_detail || ""}
                row 
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="For any 9 months during the past 18 months before you were hired?"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Or, for any 18 months beginning after August 5, 1997 and ending within the past 2 years?"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Or, did your family stop being eligible within the last 2 years because the law limited the maximum time those payments can be made?"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Primary Recipient Name:"
              name="tanf_primary_benefits_recipient_name"
              value={employeeDetails[0].tanf_primary_benefits_recipient_name || ""}
              fullWidth
            />
            <TextField
              label="City / State where benefits received:"
              name="tanf_benefits_city_state"
              value={employeeDetails[0].tanf_benefits_city_state || ""}
              fullWidth
            />
          </Grid>
        )}

        {/* SSI Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
              I received{" "}
              <strong>SSI Benefit (Supplemental Security Income) </strong>for
              any month ending within 60 Days before being hired:
            </FormLabel>
            <RadioGroup
              aria-label="snap-benefits"
              name="qualified_ssi_recipient"
              value={
                employeeDetails[0].qualified_ssi_recipient === undefined
                  ? ""
                  : employeeDetails[0].qualified_ssi_recipient
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Work Opportunity Credit */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
              I have received a conditional certification from a{" "}
              <strong>State Workforce Agency</strong> (SWA), or a participating
              local agency for the Work Opportunity Credit:
            </FormLabel>
            <RadioGroup
              aria-label="swa"
              name="swa"
              value={
                employeeDetails[0].swa === undefined
                  ? ""
                  : employeeDetails[0].swa
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/* Unemployment */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl component="fieldset" >
            <FormLabel component="legend">
              I have been{" "}
              <strong>unemployed for at least 27 consecutive weeks</strong> and
              collected Unemployment Compensation during that time:
            </FormLabel>
            <RadioGroup
              aria-label="unemployed_27_weeks"
              name="unemployed_27_weeks"
              value={
                employeeDetails[0].unemployed_27_weeks === undefined
                  ? ""
                  : employeeDetails[0].unemployed_27_weeks
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {employeeDetails[0].unemployed_27_weeks === "1" && (
          <Grid item xs={12}>
            <TextField
            fullWidth
            label="Enter start date of unemployment benefits:"
            type="date"
            name="unemp_start_date"
            value={employeeDetails[0].unemp_start_date || ''}

            InputLabelProps={{
              shrink: true,
            }}
          />
                      <TextField
              label="State where benefits received"
              name="unemp_benifits"
              value={employeeDetails[0].unemp_benifits || ""}
              fullWidth
            />

          </Grid>
        )}
      </Grid>
        {/* Veteran Status */}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              I am a <strong>Veteran of the US Armed Forces</strong>:
            </FormLabel>
            <RadioGroup
              aria-label="qualified_veteran"
              name="qualified_veteran"
              value={
                employeeDetails[0].qualified_veteran === undefined
                  ? ""
                  : employeeDetails[0].qualified_veteran
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {employeeDetails[0].qualified_veteran && (
                      <FormControl component="fieldset" >
                      <FormLabel component="legend">
                      Are you a veteran entitled to compensation for a service-connected disability?:
                      </FormLabel>
                      <RadioGroup
                        aria-label="veteran_disabled_recently_discharged"
                        name="veteran_disabled_recently_discharged"
                        value={
                          employeeDetails[0].veteran_disabled_recently_discharged === undefined
                            ? ""
                            : employeeDetails[0].veteran_disabled_recently_discharged
                            ? "true"
                            : "false"
                        }
                        row 
                    
                      >
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                      </RadioGroup>
                   
                    </FormControl>
                    
        )
        }
        {employeeDetails[0].veteran_disabled_recently_discharged && (
            <>
                                  <FormControl component="fieldset" >
                                  <FormLabel component="legend">
                                  Were you discharged or released from active duty within a year before you were hired?
                                  </FormLabel>
                                  <RadioGroup
                                    aria-label="discharged_active_duty"
                                    name="discharged_active_duty"
                                    value={
                                      employeeDetails[0].discharged_active_duty === undefined
                                        ? ""
                                        : employeeDetails[0].discharged_active_duty
                                        ? "true"
                                        : "false"
                                    }
                                    row 
                                 
                                  >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                  </RadioGroup>
                           
                                </FormControl>
                                                                  <FormControl component="fieldset" >
                                                                  <FormLabel component="legend">
                                                                  Where you unemployed for a combined period of at least 6 months (whether or not consecutive) during the year before you were hired?
                                                                  </FormLabel>
                                                                  <RadioGroup
                                                                    aria-label="veteran_unemployed_6_months"
                                                                    name="veteran_unemployed_6_months"
                                                                    value={
                                                                      employeeDetails[0].veteran_unemployed_6_months === undefined
                                                                        ? ""
                                                                        : employeeDetails[0].veteran_unemployed_6_months
                                                                        ? "true"
                                                                        : "false"
                                                                    }
                                                                    row 
                                                                  
                                                                  >
                                                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                  </RadioGroup>
                                                             
                                                                </FormControl>
                                                                </>
        )}
        {employeeDetails[0].qualified_veteran && (<>
                                                                              <FormControl component="fieldset" >
                                                                              <FormLabel component="legend">
                                                                              Are you a member of a family that received Supplemental Nutrtion Assistance Program (SNAP) benefits (Food Stamps) for at least 3 months during the 15 months before you were hired?                                                                               </FormLabel>
                                                                              <RadioGroup
                                                                                aria-label="snap_atleat_three_months"
                                                                                name="snap_atleat_three_months"
                                                                                value={
                                                                                  employeeDetails[0].snap_atleat_three_months === undefined
                                                                                    ? ""
                                                                                    : employeeDetails[0].snap_atleat_three_months
                                                                                    ? "true"
                                                                                    : "false"
                                                                                }
                                                                                row 
                                                                         
                                                                              >
                                                                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                              </RadioGroup>
                                                                            </FormControl>
                                                                                                                                                          <FormControl component="fieldset" >
                                                                                                                                                          <FormLabel component="legend">
                                                                                                                                                          Were you unemployed for at least 6 months before you were hired?                                                                               </FormLabel>
                                                                                                                                                          <RadioGroup
                                                                                                                                                            aria-label="unemp_atleat_six_months"
                                                                                                                                                            name="unemp_atleat_six_months"
                                                                                                                                                            value={
                                                                                                                                                              employeeDetails[0].unemp_atleat_six_months === undefined
                                                                                                                                                                ? ""
                                                                                                                                                                : employeeDetails[0].unemp_atleat_six_months
                                                                                                                                                                ? "true"
                                                                                                                                                                : "false"
                                                                                                                                                            }
                                                                                                                                                            row 
                                                                                                                                                           
                                                                                                                                                          >
                                                                                                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                                                                                                          </RadioGroup>
                                                                                                                                                          
                                                                                                                                                        </FormControl>
                                                                                                                                                        <FormControl component="fieldset" >
                                                                                                                                                          <FormLabel component="legend">
                                                                                                                                                          Were you unemployed for less than 6 months before you were hired?                                                                                </FormLabel>
                                                                                                                                                          <RadioGroup
                                                                                                                                                            aria-label="unemp_less_than_six_months"
                                                                                                                                                            name="unemp_less_than_six_months"
                                                                                                                                                            value={
                                                                                                                                                              employeeDetails[0].unemp_less_than_six_months === undefined
                                                                                                                                                                ? ""
                                                                                                                                                                : employeeDetails[0].unemp_less_than_six_months
                                                                                                                                                                ? "true"
                                                                                                                                                                : "false"
                                                                                                                                                            }
                                                                                                                                                            row 
                                                                                                 
                                                                                                                                                          >
                                                                                                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                                                                                                          </RadioGroup>
                                                                                                                                                          
                                                                                                                                                        </FormControl>
                                                                                                                                                        </>
        )}

        {/* convicted */}
        <Grid item xs={12}>
          <FormControl component="fieldset" >
            <FormLabel component="legend">
            I was <strong>Convicted of a Felony</strong> or released from prison during the year before I was hired
            </FormLabel>
            <RadioGroup
              aria-label="qualified_ex_felon"
              name="qualified_ex_felon"
              value={
                employeeDetails[0].qualified_ex_felon === undefined
                  ? ""
                  : employeeDetails[0].qualified_ex_felon
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {employeeDetails[0].qualified_ex_felon && (
                      <Grid item xs={12}>
                      <TextField
                      fullWidth
                      label="Date of conviction"
                      type="date"
                      name="felony_conviction_date"
                      value={employeeDetails[0].felony_conviction_date || ''}
                      InputLabelProps={{
                        shrink: true,
                      }}

                    />
                                          <TextField
                      fullWidth
                      label="Date of release"
                      type="date"
                      name="felony_release_date"
                      value={employeeDetails[0].felony_release_date || ''}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

<FormControl component="fieldset">
            <FormLabel component="legend">
            Federal Conviction
            </FormLabel>
            <RadioGroup
              aria-label="federal_conviction"
              name="federal_conviction"
              value={
                employeeDetails[0].federal_conviction === undefined
                  ? ""
                  : employeeDetails[0].federal_conviction
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" >
            <FormLabel component="legend">
                State Conviction
            </FormLabel>
            <RadioGroup
              aria-label="state_conviction"
              name="state_conviction"
              value={
                employeeDetails[0].state_conviction === undefined
                  ? ""
                  : employeeDetails[0].state_conviction
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          
                    </Grid>
                    
        )}

<Grid item xs={12}>
<FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
            I live in a Rural Renewal Community
            </FormLabel>
            <RadioGroup
              aria-label="designated_community_resident_RRC"
              name="designated_community_resident_RRC"
              value={
                employeeDetails[0].designated_community_resident_RRC === undefined
                  ? ""
                  : employeeDetails[0].designated_community_resident_RRC
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
            I live in a Empowerment Zone:
            </FormLabel>
            <RadioGroup
              aria-label="designated_community_resident_EZ"
              name="designated_community_resident_EZ"
              value={
                employeeDetails[0].designated_community_resident_EZ === undefined
                  ? ""
                  : employeeDetails[0].designated_community_resident_EZ
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

</Grid>
{/* Vocational Rehabilitation */}
<Grid item xs={12}>
<FormControl
            component="fieldset"
          >
            <FormLabel component="legend">
            I have received <strong>Vocational Rehabilitation</strong> services within the past two years: 
            </FormLabel>
            <RadioGroup
              aria-label="vocational_rehabilitation_referral"
              name="vocational_rehabilitation_referral"
              value={
                employeeDetails[0].vocational_rehabilitation_referral === undefined
                  ? ""
                  : employeeDetails[0].vocational_rehabilitation_referral
                  ? "true"
                  : "false"
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

</Grid>
{employeeDetails[0].vocational_rehabilitation_referral && (
    <Grid item xs={12}>
    <FormControl
                component="fieldset"
              >
                <FormLabel component="legend">
                Received vocational rehabilitation services from a <strong>Vocational Rehabilitation Agency?</strong>  
                </FormLabel>
                <RadioGroup
                  aria-label="rehab_approved_state"
                  name="rehab_approved_state"
                  value={
                    employeeDetails[0].rehab_approved_state === undefined
                      ? ""
                      : employeeDetails[0].rehab_approved_state
                      ? "true"
                      : "false"
                  }
                  row 
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
              <FormControl
                component="fieldset"
              >
                <FormLabel component="legend">
                Received vocational rehabilitation services from Dept. of <strong>Veteran Affairs</strong>?  
                </FormLabel>
                <RadioGroup
                  aria-label="vet_affairs"
                  name="vet_affairs"
                  value={
                    employeeDetails[0].vet_affairs === undefined
                      ? ""
                      : employeeDetails[0].vet_affairs
                      ? "true"
                      : "false"
                  }
                  row 
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>


              </FormControl>
              <FormControl
                component="fieldset"
              >
                <FormLabel component="legend">
                Received vocational rehabiliation services from an <strong>Employment Network</strong>, under the <strong>Ticket to Work Program</strong>?  
                </FormLabel>
                <RadioGroup
                  aria-label="emp_network_work_program"
                  name="emp_network_work_program"
                  value={
                    employeeDetails[0].emp_network_work_program === undefined
                      ? ""
                      : employeeDetails[0].emp_network_work_program
                      ? "true"
                      : "false"
                  }
                  row 
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
    
    </Grid>
)}
  <Typography variant="h4" gutterBottom>
        Sign and Submit
      </Typography>
      <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            name="employee_signature"
            checked={Boolean(employeeDetails[0].employee_signature)}
          />
        }
        label="The information contained in this application is correct and to the best of my knowledge."
      />
      </Grid>
      <Typography variant="body2" paragraph>
        By signing this form, I hereby authorize any agency, organization, Social Security Administration,
        Department of Veterans Affairs, or individuals, to supply verification of information as may be needed
        to determine tax credit eligibility to my employer, employer representative (TC Services USA, Inc. dba
        WOTC.com), or the Department of Labor.
      </Typography>
      <Grid item xs={6}>               
           {employeeDetails[0].employee_signature ? (
                    <img
                      src={employeeDetails[0].employee_signature}
                      alt="Signature"
                      style={{ maxWidth: "250px" }}
                    />
                  ) : (
                    "No Signature"
                  )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Date Signed"
          type="date"
          name="date_signed"
          value={employeeDetails[0].date_signed || ''}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      </Grid>
    </>
  )
}

export default EmployeeInfo
