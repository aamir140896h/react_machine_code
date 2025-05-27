import React from "react";

const Input = ({ label, type, value, onChange, name, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        required
      />
      {error && <small className="error">{error}</small>}
    </div>
  );
};

export default Input;
