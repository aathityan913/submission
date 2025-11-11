// src/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import MainDashboard from "./components/MainDashboard"; // create this to hold your current main content

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />   {/* Homepage */}
      <Route path="/about" element={<About />} />      {/* About page */}
    </Routes>
  );
};

export default AppRoutes;
