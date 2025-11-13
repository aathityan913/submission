import React, { useState } from "react";

const CheeseImage = () => {
  const [status, setStatus] = useState("Mouse not on image");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setStatus("🧀 Mouse is on the cheese image!");
  };

  const handleMouseLeave = () => {
    setStatus("❌ Mouse left the cheese image.");
  };

  const handleMouseMove = (e) => {
    setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cheese Image 🧀</h2>
      <img
        src="https://images2.alphacoders.com/129/1292915.jpg"
        alt="Cheese"
        width="250"
        style={{
          borderRadius: "10px",
          boxShadow: "0 0 10px gray",
          cursor: "crosshair",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{status}</p>
      {status.includes("on the cheese image") && (
        <p>
          📍 Coordinates: X = {coords.x}, Y = {coords.y}
        </p>
      )}
    </div>
  );
};

export default CheeseImage;

