import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { submitForm, resetForm } from "../../Redux/formSlice";
import "./LoginFormRedux.css";

// Reducer function to manage form state locally
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET_FIELDS":
      return { username: "", password: "", email: "" };

    default:
      return state;
  }
};

export default function LoginForm() {
  const dispatch = useDispatch();

  // Initialize reducer with form fields
  const [fields, localDispatch] = useReducer(formReducer, {
    username: "",
    password: "",
    email: "",
  });

  // Handle input change using reducer
  const handleInput = (e) => {
    const { name, value } = e.target;
    localDispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(fields));
  };

  // Reset both local and global (Redux) form state
  const handleReset = () => {
    localDispatch({ type: "RESET_FIELDS" });
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
              onChange={handleInput}
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
