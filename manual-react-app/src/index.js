import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Welcome from "./components/props";
import ScientistList from "./components/ScientistList";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <App/>
      <div style={{textAlign:"center"}} ><Welcome name="Aathityan"/></div>
      <ScientistList/>
    </>
  </React.StrictMode>
);
