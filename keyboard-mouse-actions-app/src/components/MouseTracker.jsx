import React, { useEffect, useState } from "react";

const MouseTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    // Add a listener for mouse movements anywhere on the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up listener when component unmounts
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "10px",
        background: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "inline-block",
      }}
    >
      <h2>Global Mouse Tracker </h2>
      <p>
        X: <strong>{coords.x}</strong> | Y: <strong>{coords.y}</strong>
      </p>
    </div>
  );
};

export default MouseTracker;
