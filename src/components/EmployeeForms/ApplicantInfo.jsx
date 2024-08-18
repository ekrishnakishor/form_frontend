// export default ApplicantInfo;
import React from "react";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio 
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import "../../Styles/formSubmission.css";

const ApplicantInfo = ({ formData, handleChange, handleBlur, errors }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Applicant Information
      </Typography>
      <Grid
        className="grid-form-submission"
        container
        spacing={2}
        direction={isMobile ? "column" : "row"} // Stack fields in a single column on mobile
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SSN"
            name="social_security_number"
            value={formData.social_security_number || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.social_security_number}
            helperText={errors.social_security_number}
            placeholder="XXX-XX-XXXX"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street Address"
            name="street_address"
            value={formData.street_address || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.street_address}
            helperText={errors.street_address}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.city}
            helperText={errors.city}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Zip Code"
            name="zip_code"
            value={formData.zip_code || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.zip_code}
            helperText={errors.zip_code}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="county">
              State
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <Select
              id="county"
              name="county"
              value={formData.county || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.county}
              helperText={errors.county}
              fullWidth
              variant="outlined"
              required
            >
              <MenuItem value="">Select State</MenuItem>
              <MenuItem value="AL">AL</MenuItem>
               <MenuItem value="AK">AK</MenuItem>
               <MenuItem value="AZ">AZ</MenuItem>
               <MenuItem value="AR">AR</MenuItem>
               <MenuItem value="CA">CA</MenuItem>
               <MenuItem value="CO">CO</MenuItem>
               <MenuItem value="CT">CT</MenuItem>
               <MenuItem value="DC">DC</MenuItem>
               <MenuItem value="DE">DE</MenuItem>
               <MenuItem value="FL">FL</MenuItem>
               <MenuItem value="GA">GA</MenuItem>
               <MenuItem value="HI">HI</MenuItem>
               <MenuItem value="ID">ID</MenuItem>
               <MenuItem value="IL">IL</MenuItem>
               <MenuItem value="IN">IN</MenuItem>
               <MenuItem value="IA">IA</MenuItem>
               <MenuItem value="KS">KS</MenuItem>
               <MenuItem value="KY">KY</MenuItem>
               <MenuItem value="LA">LA</MenuItem>
               <MenuItem value="ME">ME</MenuItem>
               <MenuItem value="MD">MD</MenuItem>
               <MenuItem value="MA">MA</MenuItem>
               <MenuItem value="MI">MI</MenuItem>
               <MenuItem value="MN">MN</MenuItem>
               <MenuItem value="MS">MS</MenuItem>
               <MenuItem value="MO">MO</MenuItem>
               <MenuItem value="MT">MT</MenuItem>
               <MenuItem value="NE">NE</MenuItem>
               <MenuItem value="NV">NV</MenuItem>
               <MenuItem value="NH">NH</MenuItem>
               <MenuItem value="NJ">NJ</MenuItem>
               <MenuItem value="NM">NM</MenuItem>
               <MenuItem value="NY">NY</MenuItem>
               <MenuItem value="NC">NC</MenuItem>
               <MenuItem value="ND">ND</MenuItem>
               <MenuItem value="OH">OH</MenuItem>
               <MenuItem value="OK">OK</MenuItem>
               <MenuItem value="OR">OR</MenuItem>
               <MenuItem value="PA">PA</MenuItem>
               <MenuItem value="PR">PR</MenuItem>
               <MenuItem value="RI">RI</MenuItem>
               <MenuItem value="SC">SC</MenuItem>
               <MenuItem value="SD">SD</MenuItem>
               <MenuItem value="TN">TN</MenuItem>
               <MenuItem value="TX">TX</MenuItem>
               <MenuItem value="UT">UT</MenuItem>
               <MenuItem value="VT">VT</MenuItem>
               <MenuItem value="VA">VA</MenuItem>
               <MenuItem value="WA">WA</MenuItem>
               <MenuItem value="WV">WV</MenuItem>
               <MenuItem value="WI">WI</MenuItem>
               <MenuItem value="WY">WY</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Telephone"
            name="telephone"
            value={formData.telephone || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.telephone}
            helperText={errors.telephone}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={handleBlur}
            error={!!errors.date_of_birth}
            helperText={errors.date_of_birth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Employee Start Date"
            type="date"
            name="emp_start_date"
            value={formData.emp_start_date || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={handleBlur}
            error={!!errors.emp_start_date}
            helperText={errors.emp_start_date}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date Applied"
            type="date"
            name="date_applied_job"
            value={formData.date_applied_job || ""}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            onBlur={handleBlur}
            error={!!errors.date_applied_job}
            helperText={errors.date_applied_job}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Job Position"
            name="job_position"
            value={formData.job_position || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.job_position}
            helperText={errors.job_position}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Starting Wage"
            name="starting_wage"
            type="number"
            value={formData.starting_wage || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.starting_wage}
            helperText={errors.starting_wage}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={!!errors.worked_for_employer_before}
          >
            <FormLabel component="legend">
              Have you worked here before? 
            </FormLabel>
            <RadioGroup
              aria-label="worked_for_employer_before-benefits"
              name="worked_for_employer_before"
              value={
                // formData.worked_for_employer_before === undefined
                //   ? ""
                //   : formData.worked_for_employer_before
                //   ? "true"
                //   : "false"
                formData.worked_for_employer_before === null || formData.worked_for_employer_before === undefined
          ? ""
          : formData.worked_for_employer_before
          ? "true"
          : "false"
              }
              onChange={(event) =>
                handleChange({
                  target: {
                    name: "worked_for_employer_before",
                    value: event.target.value === "true",
                  },
                })
              }
              row 
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>

            {errors.worked_for_employer_before && (
              <FormHelperText>{errors.worked_for_employer_before}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default ApplicantInfo;
