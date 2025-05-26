import React, { useEffect, useState } from "react";

const DynamicFormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!/^\d+$/.test(formData.age)) {
      newErrors.age = "Age must be a number";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  //   useEffect(() => {
  //     validate();
  //   }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
    console.log("Submitted form data", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          laceholder="Name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email: </label>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={(e) => handleChange(e)}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default DynamicFormValidation;
