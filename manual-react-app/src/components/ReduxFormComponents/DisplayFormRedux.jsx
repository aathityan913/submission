import React from "react";
import { useSelector } from "react-redux";
import "./DisplayFormRedux.css";

export default function DisplayFormData() {
  const formData = useSelector((state) => state.form);

  // Merge form data and token for display
  const displayData = {
    ...formData.data,
    token: formData.token || "No token generated yet",
  };

  return (
    <div className="display-container">
      <h3>Submitted Details</h3>
      {formData.submitted ? (
        <div className="json-display">
          <pre>{JSON.stringify(displayData, null, 2)}</pre>
        </div>
      ) : (
        <p>No form submitted yet.</p>
      )}
    </div>
  );
}
