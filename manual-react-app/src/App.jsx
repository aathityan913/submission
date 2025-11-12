import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import MainDashboard from "./MainDashBoard";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ReduxContainer from "./Redux/ReduxContainer";
import FetchHtml from './components/API_CALLING/FetchExample';
import FetchApi from './components/API_CALLING/FetchApiComponent';
import MainLoginComponent from './MainLoginComponent';
import LandingPage from "./components/LandingPage";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ FIXED: get the location object
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
        <Route  path="/" element={<LandingPage/>}/>
          <Route
            path="/homepage"
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
          <Route  path="/mainlogin" element={<MainLoginComponent />}/>
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<ReduxContainer/>} />
          <Route path='*' element={<NotFound/>}/>
          <Route path="/fetch" element={<FetchHtml/>}/>
          <Route path="/api" element={<FetchApi/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
