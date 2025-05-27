import React, { useEffect, useState } from "react";
import "./tab.css";
import Input from "./Input";
const tabs = ["Profile", "Interests", "Settings"];
const initialFormData = {
  name: "",
  age: "",
  email: "",
  interest: [],
  newsletter: false,
};
const TabMain = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  const handleChange = (name, value) => {
    if (name === "interest") {
      const upadate = formData.interest.includes(value)
        ? formData.interest.filter((item) => item !== value) // remove if there
        : [...formData.interest, value]; // add if not there

      setFormData({ ...formData, interest: upadate });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(formData);

  const handleSubmit = () => {
    alert("tab form is submittted ! check the console");
    console.log(formData);
    setFormData(initialFormData);
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  return (
    <div className="container">
      <h1>Tabs Form</h1>
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`tab-item ${index === activeStep ? "active" : ""}`}
            onClick={() => setActiveStep(index)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {activeStep === 0 && (
          <>
            <Input
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              required
              onChange={handleChange}
            />
            <Input
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              required
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </>
        )}
        {activeStep === 1 && (
          <div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="coding"
                  checked={formData?.interest?.includes("coding")}
                  onChange={(e) => handleChange("interest", e.target.name)}
                />
                Coding
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="playing"
                  checked={formData?.interest?.includes("playing")}
                  onChange={(e) => handleChange("interest", e.target.name)}
                />
                Playing:
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="cooking"
                  checked={formData?.interest?.includes("cooking")}
                  onChange={(e) => handleChange("interest", e.target.name)}
                />
                Cooking
              </label>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <>
            <h2> Final submission</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default TabMain;
