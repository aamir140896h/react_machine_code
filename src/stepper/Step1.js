import React, { useState } from "react";
import Input from "./Input";

const Step1 = ({ nextStep, formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const valid = () => {
    const temp = {};
    if (!formData.name) temp.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Invalid email";
    if (!/^\d{10}$/.test(formData.phone))
      temp.phone = "Phone number must be 10 digit";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleNext = () => {
    if (valid()) nextStep();
  };
  return (
    <>
      <h2>Step1: Personal Info</h2>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Step1;
