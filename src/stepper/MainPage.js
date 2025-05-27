import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Progress from "./Progress";
import Step2 from "./Step2";
import Step3 from "./Step3";

let initialFormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zip: "",
};
const MainPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Form submitted ! check console for data");
    console.log(formData);
    localStorage.removeItem("formData");
    setStep(1);
    setFormData(initialFormData);
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="container">
      <Progress step={step} />
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <Step2
          prevStep={prevStep}
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <Step3
          prevStep={prevStep}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MainPage;
