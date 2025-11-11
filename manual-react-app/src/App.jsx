import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import MainDashboard from "./MainDashBoard";
import About from "./components/About";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-wrapper">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand">REACT TRAINING</div>
          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <Link
              className={location.pathname === "/" ? "active-link" : ""}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={location.pathname === "/dashboard" ? "active-link" : ""}
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              className={location.pathname === "/about" ? "active-link" : ""}
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-page">
                <h1>Welcome to OG App</h1>
                <p>This is a brand new app.</p>
                <Link to="/dashboard" className="btn btn-primary">
                  Go to Dashboard
                </Link>
              </div>
            }
          />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
