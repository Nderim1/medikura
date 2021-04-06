import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className="form-control" {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
