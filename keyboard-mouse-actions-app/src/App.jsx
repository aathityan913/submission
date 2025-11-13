import React from "react";
import CheeseImage from "./components/CheeseImage";
import KeyboardActions from "./components/KeyboardActions";
import MouseTracker from "./components/MouseTracker";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🧀 Cheese Action Demo</h1>
      <CheeseImage />
      <KeyboardActions />
      <MouseTracker/>
   
    </div>
  );
};

export default App;
