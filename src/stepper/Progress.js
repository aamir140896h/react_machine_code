import React from "react";

const Progress = ({ step }) => {
  const steps = ["Personal Info", "Address", "Review"];
  return (
    <div className="progress-bar">
      {/* {steps.map((label, i) => (
        <div key={label} className={`step ${i < step ? "active" : ""}`}>
          {label}
        </div>
      ))} */}
      {steps.map((label, index) => (
        <div key={index} className="step-wrapper">
          <div
            className={`circle ${step > index ? "completed" : ""} ${
              step === index + 1 ? "active" : ""
            }`}
          >
            {step > index + 1 ? "✔" : index + 1}
          </div>
          {index < steps.length - 1 && <div className="line" />}
          <div
            className={`label ${
              step === index + 1
                ? "label-active"
                : step > index + 1
                ? "label-complete"
                : ""
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
