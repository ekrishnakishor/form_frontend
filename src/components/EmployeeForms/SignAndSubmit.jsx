import React, { useRef } from 'react';
import { Typography, Checkbox, FormControlLabel, TextField, Button, FormHelperText, Grid } from '@material-ui/core';
import SignatureCanvas from 'react-signature-canvas';

// Convert data URL to file
const dataURLToFile = (dataURL, filename) => {
  const [header, data] = dataURL.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(data);
  const array = [];

  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  return new File([new Uint8Array(array)], filename, { type: mime });
};

const SignAndSubmit = ({ formData, handleChange, handleBlur, errors }) => {
  const signaturePadRef = useRef(null);

  const handleSignature = () => {
    if (signaturePadRef.current) {
      const dataURL = signaturePadRef.current.toDataURL();
      const file = dataURLToFile(dataURL, 'signature.png');
      handleChange({ target: { name: 'employee_signature', value: file } });
    }
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Sign and Submit
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="employee_signature"
            checked={Boolean(formData.employee_signature)}
            onChange={() => handleChange({ target: { name: 'employee_signature', value: !formData.employee_signature } })}
          />
        }
        label="The information contained in this application is correct and to the best of my knowledge."
      />
      {errors.employee_signature && (
        <FormHelperText error>{errors.employee_signature}</FormHelperText>
      )}
      <Typography variant="body2" paragraph>
        By signing this form, I hereby authorize any agency, organization, Social Security Administration,
        Department of Veterans Affairs, or individuals, to supply verification of information as may be needed
        to determine tax credit eligibility to my employer, employer representative (TC Services USA, Inc. dba
        WOTC.com), or the Department of Labor.
      </Typography>
      <SignatureCanvas
        ref={signaturePadRef}
        penColor='black'
        canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }}
        onEnd={handleSignature}
      />
      <Button type="button" onClick={clearSignature}>
        Clear Signature
      </Button>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Date Signed"
          type="date"
          name="date_signed"
          value={formData.date_signed || ''}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={handleBlur}
          error={!!errors.date_signed}
          helperText={errors.date_signed}
        />
      </Grid>
    </div>
  );
};

export default SignAndSubmit;
