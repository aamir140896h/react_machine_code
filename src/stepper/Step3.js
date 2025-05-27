import React from "react";

const Step3 = ({ prevStep, formData, handleSubmit }) => {
  return (
    <>
      <h2> Step 3: Review</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li>
            <strong>{key} : </strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Step3;
