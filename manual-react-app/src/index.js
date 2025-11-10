import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Welcome from "./components/props";
import ScientistList from "./components/ScientistList";
import FormComponent from "./components/FormComponent";
import DisplayComponent from "./components/DisplayComponent";

const Root = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data); // save data in state
  };

  return (
    <React.StrictMode>
      <div style={{ textAlign: "center" }}>
        <App />
        <Welcome name="Aathityan" />
        <ScientistList />

        {/* Grid container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "50px",
            padding: "0 20px",
          }}
        >
          {/* Form */}
          <div style={{ border: "1px solid #ccc", padding: "20px" }}>
            <h2>Form</h2>
            <FormComponent setFormData={handleFormSubmit} />
          </div>

          {/* Display Component */}
          <div style={{ border: "1px solid #ccc", padding: "20px" }}>
            <h2>Submitted Data</h2>
            <DisplayComponent data={submittedData} />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
