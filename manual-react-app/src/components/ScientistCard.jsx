import React from "react";

export default function ScientistCard({ name, image, description }) {
  return (
    <div
      style={{
        border: "2px solid #ddd",
        borderRadius: "15px",
        width: "230px",
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ marginBottom: "10px", color: "#111" }}>{name}</h3>
      <p
        style={{
          fontSize: "14px",
          color: "#555",
          textAlign: "justify",
          lineHeight: "1.4",
        }}
      >
        {description}
      </p>
    </div>
  );
}
