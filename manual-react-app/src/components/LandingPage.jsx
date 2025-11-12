import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <h1>Welcome to the OG Bank Dashboard</h1>
        <p>
          A modern dashboard for managing your accounts, transactions, and data in
          one place.
        </p>
        <button className="btn btn-primary" onClick={() => navigate("/mainlogin")}>
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

