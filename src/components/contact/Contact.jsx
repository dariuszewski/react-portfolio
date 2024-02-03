import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"; // Assuming this for Stack Overflow

import "./contact.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
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
    tempErrors.captcha =
      formValues.captcha === "5" ? "" : "The answer is not correct.";
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
      // Implement submission logic here
      console.log(formValues);
      // Reset form and errors after successful validation
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
      });
      setErrors({});
    }
  };

  const handleClearForm = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
      captcha: "",
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
        <h3>Contact Me</h3>
        {/* <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ color: "white", marginY: 4 }}
        >
          Contact Me
        </Typography> */}
        <Box sx={{ mt: 8, color: "white" }}>
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
        <Divider sx={{ my: 4, bgcolor: "white" }} />
        <Box sx={{ textAlign: "center", pb: 4, color: "white" }}>
          <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton sx={{ fontSize: "2rem", mx: 2, color: "white" }}>
            <DeveloperModeIcon fontSize="inherit" />{" "}
            {/* This icon is used as an example for Stack Overflow */}
          </IconButton>
        </Box>
      </Container>
    </div>
  );
}
