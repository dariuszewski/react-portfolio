import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import "./contact.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formValues.name ? "" : "This field is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email)
      ? ""
      : "Email is not valid.";
    tempErrors.subject = formValues.subject ? "" : "This field is required.";
    tempErrors.message = formValues.message ? "" : "This field is required.";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("trigg");
      // Construct the mailto link
      const mailtoLink = `mailto:example@example.com?subject=${encodeURIComponent(
        formValues.subject
      )}&body=${encodeURIComponent(
        `Name: ${formValues.name}\nEmail: ${formValues.email}\nMessage: ${formValues.message}`
      )}`;

      // Open the default mail client
      window.location.href = mailtoLink;

      // Reset the form here
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleClearForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const textFieldStyles = {
    InputProps: {
      style: { color: "white" },
    },
    InputLabelProps: {
      style: { color: "white" },
    },
    sx: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(255, 255, 255, 0.3)",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
      "& .MuiInputLabel-outlined": {
        color: "white",
      },
      backgroundColor: "transparent",
      marginY: 1, // adds margin to top and bottom for spacing
    },
  };

  return (
    <div id="Contact">
      <Container component="main" maxWidth="xl">
        {" "}
        <h3 className="Contact_section_title">Contact Me</h3>
        <Box sx={{ mt: 2, color: "white" }}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={formValues.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
              {...textFieldStyles}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formValues.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              {...textFieldStyles}
            />
            <TextField
              required
              fullWidth
              id="subject"
              label="Subject"
              name="subject"
              autoComplete="subject"
              value={formValues.subject}
              onChange={handleInputChange}
              error={!!errors.subject}
              helperText={errors.subject}
              {...textFieldStyles}
            />
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formValues.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
              {...textFieldStyles}
            />
            <Box sx={{ display: "flex", mt: 3, justifyContent: "flex-start" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mr: 1,
                  bgcolor: "white",
                  color: "black",
                  textTransform: "none",
                }}
              >
                Send Message
              </Button>
              <Button
                onClick={handleClearForm}
                variant="outlined"
                sx={{
                  ml: 1,
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  textTransform: "none",
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
