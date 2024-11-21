// app/components/SignupForm.js
"use client";

import React, { useRef, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    return tempErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, redirect to home page
      router.push("/");
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocusNextField = (currentRef, nextRef) => {
    if (currentRef.current.value !== "") {
      nextRef.current.focus();
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Typography variant="h5">Sign Up</Typography>

      <div>
        <input
          ref={firstNameRef}
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          onBlur={() => handleFocusNextField(firstNameRef, lastNameRef)}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <input
          ref={lastNameRef}
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={() => handleFocusNextField(lastNameRef, emailRef)}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <input
          ref={emailRef}
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={() => handleFocusNextField(emailRef, phoneRef)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          ref={phoneRef}
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
}
