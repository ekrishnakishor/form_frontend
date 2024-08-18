// WOTCQuestionnaire.jsx
import React from "react";
import {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  FormControl,  
  FormLabel,
  FormHelperText,
} from "@material-ui/core";

const WOTCQuestionnaire = ({ formData, handleChange, errors }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        WOTC Questionnaire
      </Typography>
      <Grid container spacing={2}>
        {/* SNAP Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.qualified_snap_recipient}
          >
            <FormLabel component="legend">
              I am a member of a family that received{" "}
              <strong>SNAP Benefits</strong> (food stamps) for the past 6
              months:
            </FormLabel>
            {/* <RadioGroup
              aria-label="snap-benefits"
              name="qualified_snap_recipient"
              value={
                formData.qualified_snap_recipient === undefined
                  ? ""
                  : formData.qualified_snap_recipient
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "qualified_snap_recipient",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup> */}
<RadioGroup
  aria-label="snap-benefits"
  name="qualified_snap_recipient"
  value={
    formData.qualified_snap_recipient === null ||
    formData.qualified_snap_recipient === undefined ||
    formData.qualified_snap_recipient === ""
      ? ""
      : formData.qualified_snap_recipient
      ? "true"
      : "false"
  }
  row
  onChange={(event) =>
    handleChange({
      target: {
        name: "qualified_snap_recipient",
        value: event.target.value === "true",
      },
    })
  }
>
  <FormControlLabel value="true" control={<Radio />} label="Yes" />
  <FormControlLabel value="false" control={<Radio />} label="No" />
</RadioGroup>

            {errors.qualified_snap_recipient && (
              <FormHelperText>{errors.qualified_snap_recipient}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {formData.qualified_snap_recipient && (
          <Grid item xs={12}>
            <RadioGroup
              aria-label="snap-benefits-detail"
              name="snap_benefits_detail"
              value={
                formData.snap_benefits_detail === undefined
                  ? ""
                  : formData.snap_benefits_detail
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "snap_benefits_detail",
                    value: event.target.value === "true",
                  },
                })
              }
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
              value={formData.snap_primary_benefits_recipient_name || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.snap_primary_benefits_recipient_name}
              helperText={errors.snap_primary_benefits_recipient_name}
            />
            <TextField
              label="City / State where benefits received:"
              name="snap_benefits_city_state"
              value={formData.snap_benefits_city_state || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.snap_benefits_city_state}
              helperText={errors.snap_benefits_city_state}
            />
          </Grid>
        )}

        {/* TANF Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.received_tanf_assistance}
          >
            <FormLabel component="legend">
              I am a member of a family that received assistance from Temporary
              Assistance (<strong>TANF</strong>):
            </FormLabel>
            <RadioGroup
              aria-label="snap-benefits"
              name="received_tanf_assistance"
              value={
                formData.received_tanf_assistance === undefined
                  ? ""
                  : formData.received_tanf_assistance
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "received_tanf_assistance",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.received_tanf_assistance && (
              <FormHelperText>{errors.received_tanf_assistance}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {formData.received_tanf_assistance === "1" && (
          <Grid item xs={12}>
            <FormControl
              component="fieldset"
              error={!!errors.tanf_benefits_detail}
            >
              <FormLabel component="legend">
                TANF (Temporary Assistance for Needy Families) Benefits
              </FormLabel>
              <RadioGroup
                aria-label="tanf-benefits-detail"
                name="tanf_benefits_detail"
                value={formData.tanf_benefits_detail || ""}
                onChange={(event) =>
                  handleChange({
                    target: {
                      name: "tanf_benefits_detail",
                      value: event.target.value,
                    },
                  })
                }
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
              {errors.tanf_benefits_detail && (
                <FormHelperText>{errors.tanf_benefits_detail}</FormHelperText>
              )}
            </FormControl>
            <TextField
              label="Primary Recipient Name:"
              name="tanf_primary_benefits_recipient_name"
              value={formData.tanf_primary_benefits_recipient_name || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.tanf_primary_benefits_recipient_name}
              helperText={errors.tanf_primary_benefits_recipient_name}
            />
            <TextField
              label="City / State where benefits received:"
              name="tanf_benefits_city_state"
              value={formData.tanf_benefits_city_state || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.tanf_benefits_city_state}
              helperText={errors.tanf_benefits_city_state}
            />
          </Grid>
        )}

        {/* SSI Benefits */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.qualified_ssi_recipient}
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
                formData.qualified_ssi_recipient === undefined
                  ? ""
                  : formData.qualified_ssi_recipient
                  ? "true"
                  : "false"
              }
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "qualified_ssi_recipient",
                    value: event.target.value === "true",
                  },
                })
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.qualified_ssi_recipient && (
              <FormHelperText>{errors.qualified_ssi_recipient}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Work Opportunity Credit */}
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.swa}
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
                formData.swa === undefined
                  ? ""
                  : formData.swa
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "swa",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.swa && (
              <FormHelperText>{errors.swa}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Unemployment */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl component="fieldset" error={!!errors.unemployed_27_weeks}>
            <FormLabel component="legend">
              I have been{" "}
              <strong>unemployed for at least 27 consecutive weeks</strong> and
              collected Unemployment Compensation during that time:
            </FormLabel>
            <RadioGroup
              aria-label="unemployed_27_weeks"
              name="unemployed_27_weeks"
              value={
                formData.unemployed_27_weeks === undefined
                  ? ""
                  : formData.unemployed_27_weeks
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "unemployed_27_weeks",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.unemployed_27_weeks && (
              <FormHelperText>{errors.unemployed_27_weeks}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        {formData.unemployed_27_weeks === "1" && (
          <Grid item xs={12}>
            <TextField
            fullWidth
            label="Enter start date of unemployment benefits:"
            type="date"
            name="unemp_start_date"
            value={formData.unemp_start_date || ''}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            // onBlur={handleBlur}
            error={!!errors.unemp_start_date}
            helperText={errors.unemp_start_date}
          />
                      <TextField
              label="State where benefits received"
              name="unemp_benifits"
              value={formData.unemp_benifits || ""}
              onChange={handleChange}
              fullWidth
              error={!!errors.unemp_benifits}
              helperText={errors.unemp_benifits}
            />

          </Grid>
        )}
      </Grid>
        {/* Veteran Status */}
        <Grid item xs={12}>
          <FormControl component="fieldset" error={!!errors.qualified_veteran}>
            <FormLabel component="legend">
              I am a <strong>Veteran of the US Armed Forces</strong>:
            </FormLabel>
            <RadioGroup
              aria-label="qualified_veteran"
              name="qualified_veteran"
              value={
                formData.qualified_veteran === undefined
                  ? ""
                  : formData.qualified_veteran
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "qualified_veteran",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.qualified_veteran && (
              <FormHelperText>{errors.qualified_veteran}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        {formData.qualified_veteran && (
                      <FormControl component="fieldset" error={!!errors.veteran_disabled_recently_discharged}>
                      <FormLabel component="legend">
                      Are you a veteran entitled to compensation for a service-connected disability?:
                      </FormLabel>
                      <RadioGroup
                        aria-label="veteran_disabled_recently_discharged"
                        name="veteran_disabled_recently_discharged"
                        value={
                          formData.veteran_disabled_recently_discharged === undefined
                            ? ""
                            : formData.veteran_disabled_recently_discharged
                            ? "true"
                            : "false"
                        }
                        row 
                        onChange={(event) =>
                          handleChange({
                            target: {
                              name: "veteran_disabled_recently_discharged",
                              value: event.target.value === "true",
                            },
                          })
                        }
                      >
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                      </RadioGroup>
                      {errors.veteran_disabled_recently_discharged && (
                        <FormHelperText>{errors.veteran_disabled_recently_discharged}</FormHelperText>
                      )}
                    </FormControl>
                    
        )
        }
        {formData.veteran_disabled_recently_discharged && (
            <>
                                  <FormControl component="fieldset" error={!!errors.discharged_active_duty}>
                                  <FormLabel component="legend">
                                  Were you discharged or released from active duty within a year before you were hired?
                                  </FormLabel>
                                  <RadioGroup
                                    aria-label="discharged_active_duty"
                                    name="discharged_active_duty"
                                    value={
                                      formData.discharged_active_duty === undefined
                                        ? ""
                                        : formData.discharged_active_duty
                                        ? "true"
                                        : "false"
                                    }
                                    row 
                                    onChange={(event) =>
                                      handleChange({
                                        target: {
                                          name: "discharged_active_duty",
                                          value: event.target.value === "true",
                                        },
                                      })
                                    }
                                  >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                  </RadioGroup>
                                  {errors.discharged_active_duty && (
                                    <FormHelperText>{errors.discharged_active_duty}</FormHelperText>
                                  )}
                                </FormControl>
                                                                  <FormControl component="fieldset" error={!!errors.veteran_unemployed_6_months}>
                                                                  <FormLabel component="legend">
                                                                  Where you unemployed for a combined period of at least 6 months (whether or not consecutive) during the year before you were hired?
                                                                  </FormLabel>
                                                                  <RadioGroup
                                                                    aria-label="veteran_unemployed_6_months"
                                                                    name="veteran_unemployed_6_months"
                                                                    value={
                                                                      formData.veteran_unemployed_6_months === undefined
                                                                        ? ""
                                                                        : formData.veteran_unemployed_6_months
                                                                        ? "true"
                                                                        : "false"
                                                                    }
                                                                    row 
                                                                    onChange={(event) =>
                                                                      handleChange({
                                                                        target: {
                                                                          name: "veteran_unemployed_6_months",
                                                                          value: event.target.value === "true",
                                                                        },
                                                                      })
                                                                    }
                                                                  >
                                                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                  </RadioGroup>
                                                                  {errors.veteran_unemployed_6_months && (
                                                                    <FormHelperText>{errors.veteran_unemployed_6_months}</FormHelperText>
                                                                  )}
                                                                </FormControl>
                                                                </>
        )}
        {formData.qualified_veteran && (<>
                                                                              <FormControl component="fieldset" error={!!errors.snap_atleat_three_months}>
                                                                              <FormLabel component="legend">
                                                                              Are you a member of a family that received Supplemental Nutrtion Assistance Program (SNAP) benefits (Food Stamps) for at least 3 months during the 15 months before you were hired?                                                                               </FormLabel>
                                                                              <RadioGroup
                                                                                aria-label="snap_atleat_three_months"
                                                                                name="snap_atleat_three_months"
                                                                                value={
                                                                                  formData.snap_atleat_three_months === undefined
                                                                                    ? ""
                                                                                    : formData.snap_atleat_three_months
                                                                                    ? "true"
                                                                                    : "false"
                                                                                }
                                                                                row 
                                                                                onChange={(event) =>
                                                                                  handleChange({
                                                                                    target: {
                                                                                      name: "snap_atleat_three_months",
                                                                                      value: event.target.value === "true",
                                                                                    },
                                                                                  })
                                                                                }
                                                                              >
                                                                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                              </RadioGroup>
                                                                              {errors.snap_atleat_three_months && (
                                                                                <FormHelperText>{errors.snap_atleat_three_months}</FormHelperText>
                                                                              )}
                                                                            </FormControl>
                                                                                                                                                          <FormControl component="fieldset" error={!!errors.unemp_atleat_six_months}>
                                                                                                                                                          <FormLabel component="legend">
                                                                                                                                                          Were you unemployed for at least 6 months before you were hired?                                                                               </FormLabel>
                                                                                                                                                          <RadioGroup
                                                                                                                                                            aria-label="unemp_atleat_six_months"
                                                                                                                                                            name="unemp_atleat_six_months"
                                                                                                                                                            value={
                                                                                                                                                              formData.unemp_atleat_six_months === undefined
                                                                                                                                                                ? ""
                                                                                                                                                                : formData.unemp_atleat_six_months
                                                                                                                                                                ? "true"
                                                                                                                                                                : "false"
                                                                                                                                                            }
                                                                                                                                                            row 
                                                                                                                                                            onChange={(event) =>
                                                                                                                                                              handleChange({
                                                                                                                                                                target: {
                                                                                                                                                                  name: "unemp_atleat_six_months",
                                                                                                                                                                  value: event.target.value === "true",
                                                                                                                                                                },
                                                                                                                                                              })
                                                                                                                                                            }
                                                                                                                                                          >
                                                                                                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                                                                                                          </RadioGroup>
                                                                                                                                                          {errors.unemp_atleat_six_months && (
                                                                                                                                                            <FormHelperText>{errors.unemp_atleat_six_months}</FormHelperText>
                                                                                                                                                          )}
                                                                                                                                                        </FormControl>
                                                                                                                                                        <FormControl component="fieldset" error={!!errors.unemp_less_than_six_months}>
                                                                                                                                                          <FormLabel component="legend">
                                                                                                                                                          Were you unemployed for less than 6 months before you were hired?                                                                                </FormLabel>
                                                                                                                                                          <RadioGroup
                                                                                                                                                            aria-label="unemp_less_than_six_months"
                                                                                                                                                            name="unemp_less_than_six_months"
                                                                                                                                                            value={
                                                                                                                                                              formData.unemp_less_than_six_months === undefined
                                                                                                                                                                ? ""
                                                                                                                                                                : formData.unemp_less_than_six_months
                                                                                                                                                                ? "true"
                                                                                                                                                                : "false"
                                                                                                                                                            }
                                                                                                                                                            row 
                                                                                                                                                            onChange={(event) =>
                                                                                                                                                              handleChange({
                                                                                                                                                                target: {
                                                                                                                                                                  name: "unemp_less_than_six_months",
                                                                                                                                                                  value: event.target.value === "true",
                                                                                                                                                                },
                                                                                                                                                              })
                                                                                                                                                            }
                                                                                                                                                          >
                                                                                                                                                            <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                                                                                                                                            <FormControlLabel value="false" control={<Radio />} label="No" />
                                                                                                                                                          </RadioGroup>
                                                                                                                                                          {errors.unemp_less_than_six_months && (
                                                                                                                                                            <FormHelperText>{errors.unemp_less_than_six_months}</FormHelperText>
                                                                                                                                                          )}
                                                                                                                                                        </FormControl>
                                                                                                                                                        </>
        )}

        {/* convicted */}
        <Grid item xs={12}>
          <FormControl component="fieldset" error={!!errors.qualified_ex_felon}>
            <FormLabel component="legend">
            I was <strong>Convicted of a Felony</strong> or released from prison during the year before I was hired
            </FormLabel>
            <RadioGroup
              aria-label="qualified_ex_felon"
              name="qualified_ex_felon"
              value={
                formData.qualified_ex_felon === undefined
                  ? ""
                  : formData.qualified_ex_felon
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "qualified_ex_felon",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.qualified_ex_felon && (
              <FormHelperText>{errors.qualified_ex_felon}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        {formData.qualified_ex_felon && (
                      <Grid item xs={12}>
                      <TextField
                      fullWidth
                      label="Date of conviction"
                      type="date"
                      name="felony_conviction_date"
                      value={formData.felony_conviction_date || ''}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // onBlur={handleBlur}
                      error={!!errors.felony_conviction_date}
                      helperText={errors.felony_conviction_date}
                    />
                                          <TextField
                      fullWidth
                      label="Date of release"
                      type="date"
                      name="felony_release_date"
                      value={formData.felony_release_date || ''}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // onBlur={handleBlur}
                      error={!!errors.felony_release_date}
                      helperText={errors.felony_release_date}
                    />

<FormControl component="fieldset" error={!!errors.federal_conviction}>
            <FormLabel component="legend">
            Federal Conviction
            </FormLabel>
            <RadioGroup
              aria-label="federal_conviction"
              name="federal_conviction"
              value={
                formData.federal_conviction === undefined
                  ? ""
                  : formData.federal_conviction
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "federal_conviction",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.federal_conviction && (
              <FormHelperText>{errors.federal_conviction}</FormHelperText>
            )}
          </FormControl>
          <FormControl component="fieldset" error={!!errors.state_conviction}>
            <FormLabel component="legend">
                State Conviction
            </FormLabel>
            <RadioGroup
              aria-label="state_conviction"
              name="state_conviction"
              value={
                formData.state_conviction === undefined
                  ? ""
                  : formData.state_conviction
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "state_conviction",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.state_conviction && (
              <FormHelperText>{errors.state_conviction}</FormHelperText>
            )}
          </FormControl>
          
                    </Grid>
                    
        )}

<Grid item xs={12}>
<FormControl
            component="fieldset"
            error={!!errors.designated_community_resident_RRC}
          >
            <FormLabel component="legend">
            I live in a Rural Renewal Community
            </FormLabel>
            <RadioGroup
              aria-label="designated_community_resident_RRC"
              name="designated_community_resident_RRC"
              value={
                formData.designated_community_resident_RRC === undefined
                  ? ""
                  : formData.designated_community_resident_RRC
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "designated_community_resident_RRC",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.designated_community_resident_RRC && (
              <FormHelperText>{errors.designated_community_resident_RRC}</FormHelperText>
            )}
          </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.designated_community_resident_EZ}
          >
            <FormLabel component="legend">
            I live in a Empowerment Zone:
            </FormLabel>
            <RadioGroup
              aria-label="designated_community_resident_EZ"
              name="designated_community_resident_EZ"
              value={
                formData.designated_community_resident_EZ === undefined
                  ? ""
                  : formData.designated_community_resident_EZ
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "designated_community_resident_EZ",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.designated_community_resident_EZ && (
              <FormHelperText>{errors.designated_community_resident_EZ}</FormHelperText>
            )}
          </FormControl>

</Grid>
{/* Vocational Rehabilitation */}
<Grid item xs={12}>
<FormControl
            component="fieldset"
            error={!!errors.vocational_rehabilitation_referral}
          >
            <FormLabel component="legend">
            I have received <strong>Vocational Rehabilitation</strong> services within the past two years: 
            </FormLabel>
            <RadioGroup
              aria-label="vocational_rehabilitation_referral"
              name="vocational_rehabilitation_referral"
              value={
                formData.vocational_rehabilitation_referral === undefined
                  ? ""
                  : formData.vocational_rehabilitation_referral
                  ? "true"
                  : "false"
              }
              row 
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "vocational_rehabilitation_referral",
                    value: event.target.value === "true",
                  },
                })
              }
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
            {errors.vocational_rehabilitation_referral && (
              <FormHelperText>{errors.vocational_rehabilitation_referral}</FormHelperText>
            )}
          </FormControl>

</Grid>
{formData.vocational_rehabilitation_referral && (
    <Grid item xs={12}>
    <FormControl
                component="fieldset"
                error={!!errors.rehab_approved_state}
              >
                <FormLabel component="legend">
                Received vocational rehabilitation services from a <strong>Vocational Rehabilitation Agency?</strong>  
                </FormLabel>
                <RadioGroup
                  aria-label="rehab_approved_state"
                  name="rehab_approved_state"
                  value={
                    formData.rehab_approved_state === undefined
                      ? ""
                      : formData.rehab_approved_state
                      ? "true"
                      : "false"
                  }
                  row 
                  onChange={(event) =>
                    handleChange({
                      target: {
                        name: "rehab_approved_state",
                        value: event.target.value === "true",
                      },
                    })
                  }
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.rehab_approved_state && (
                  <FormHelperText>{errors.rehab_approved_state}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                component="fieldset"
                error={!!errors.vet_affairs}
              >
                <FormLabel component="legend">
                Received vocational rehabilitation services from Dept. of <strong>Veteran Affairs</strong>?  
                </FormLabel>
                <RadioGroup
                  aria-label="vet_affairs"
                  name="vet_affairs"
                  value={
                    formData.vet_affairs === undefined
                      ? ""
                      : formData.vet_affairs
                      ? "true"
                      : "false"
                  }
                  row 
                  onChange={(event) =>
                    handleChange({
                      target: {
                        name: "vet_affairs",
                        value: event.target.value === "true",
                      },
                    })
                  }
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.vet_affairs && (
                  <FormHelperText>{errors.vet_affairs}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                component="fieldset"
                error={!!errors.emp_network_work_program}
              >
                <FormLabel component="legend">
                Received vocational rehabiliation services from an <strong>Employment Network</strong>, under the <strong>Ticket to Work Program</strong>?  
                </FormLabel>
                <RadioGroup
                  aria-label="emp_network_work_program"
                  name="emp_network_work_program"
                  value={
                    formData.emp_network_work_program === undefined
                      ? ""
                      : formData.emp_network_work_program
                      ? "true"
                      : "false"
                  }
                  row 
                  onChange={(event) =>
                    handleChange({
                      target: {
                        name: "emp_network_work_program",
                        value: event.target.value === "true",
                      },
                    })
                  }
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.emp_network_work_program && (
                  <FormHelperText>{errors.emp_network_work_program}</FormHelperText>
                )}
              </FormControl>
    
    </Grid>
)}

      </Grid>
    </>
  );
};

export default WOTCQuestionnaire;
