import React, { useState } from "react";
import Input from "./Input";

const Step2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const valid = () => {
    const temp = {};
    if (!formData.address) temp.name = "Address is required";
    if (!formData.city) temp.city = "City is required";
    if (!/^\d{5,6}$/.test(formData.zip)) temp.zip = "Invalid zip code";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleNext = () => {
    if (valid()) nextStep();
  };
  return (
    <>
      <h2>Step 2: Address Info</h2>
      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
      />
      <Input
        label="ZIP Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={errors.zip}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Step2;
