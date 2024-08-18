import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const AddEditCompany = ({ company, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    short_code: "",
    employer_name: "",
    employer_telephone: "",
    employer_in: "",
    employer_address: "",
    contact_person: "",
    contact_telephone: "",
    contact_address: "",
  });

  useEffect(() => {
    if (company) {
      setFormData(company);
    }
  }, [company]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (company) {
        await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/companies/${company.id}/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/companies/`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      onClose();
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Short Code"
        name="short_code"
        value={formData.short_code}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employer Name"
        name="employer_name"
        value={formData.employer_name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employer Telephone"
        name="employer_telephone"
        value={formData.employer_telephone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employer IN"
        name="employer_in"
        value={formData.employer_in}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Employer Address"
        name="employer_address"
        value={formData.employer_address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Person"
        name="contact_person"
        value={formData.contact_person}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Telephone"
        name="contact_telephone"
        value={formData.contact_telephone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contact Address"
        name="contact_address"
        value={formData.contact_address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {company ? "Update Company" : "Add Company"}
      </Button>
    </form>
  );
};

export default AddEditCompany;
