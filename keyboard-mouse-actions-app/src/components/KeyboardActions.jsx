import React, { useState, useEffect } from "react";

const KeyboardActions = () => {
  const [keyPressed, setKeyPressed] = useState("None");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyPressed(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Keyboard Actions 🎹</h2>
      <p>Press any key to see the result:</p>
      <div
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          fontSize: "20px",
        }}
      >
        Last key pressed: <strong>{keyPressed}</strong>
      </div>
    </div>
  );
};

export default KeyboardActions;
