import React from "react";
import { useDispatch } from "react-redux";
import { submitForm, resetForm } from "../../Redux/formSlice";
import useFormFields from "../../hooks/useFormFields";
import "./LoginFormRedux.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  // dynamic input fields
  const [fields, handleChange, resetFields] = useFormFields({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(fields));
  };

  const handleReset = () => {
    resetFields();
    dispatch(resetForm());
  };

  return (
    <div className="login-container">
      <h2>Login Portal</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {Object.keys(fields).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.toUpperCase()}</label>
            <input
              type={key === "password" ? "password" : "text"}
              name={key}
              id={key}
              value={fields[key]}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              required
            />
          </div>
        ))}

        <div className="button-group">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="social-login">
          <button className="btn-facebook">Login with Facebook</button>
          <button className="btn-instagram">Login with Instagram</button>
        </div>
      </form>
    </div>
  );
}
