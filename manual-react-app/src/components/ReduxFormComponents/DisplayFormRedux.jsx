import React from "react";
import { useSelector } from "react-redux";
import "./DisplayFormRedux.css";

export default function DisplayFormData() {
  const formData = useSelector((state) => state.form.data);
  const isSubmitted = useSelector((state) => state.form.submitted);

  return (
    <div className="display-container">
      <h3>Submitted Details</h3>
      {isSubmitted ? (
        <div className="display-card">
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}>
              <strong>{key.toUpperCase()}:</strong> {value}
            </p>
          ))}
        </div>
      ) : (
        <p>No form submitted yet.</p>
      )}
    </div>
  );
}
