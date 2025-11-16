import React, { useState } from "react";
import ApiButton1 from "./ApiButton1";
import ApiButton2 from "./ApiButton2";
import ApiButton3 from "./ApiButton3";

const ApiButtons = () => {
  const [result, setResult] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>API Buttons</h2>

      {/* Pass setResult to child components */}
      <ApiButton1 setResult={setResult} />
      <ApiButton2 setResult={setResult} />
      <ApiButton3 setResult={setResult} />

      {/* TEST TARGET */}
      <div data-testid="result-box" style={{ marginTop: "20px" }}>
        {result}
      </div>
    </div>
  );
};

export default ApiButtons;
