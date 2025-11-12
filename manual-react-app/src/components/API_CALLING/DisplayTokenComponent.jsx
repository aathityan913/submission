import React, { useState, useEffect } from "react";

export default function DisplayTokenComponent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Read token from localStorage
    const savedToken = localStorage.getItem("jwt");
    if (savedToken) setToken(savedToken);
  }, []); // runs once on mount

  return (
    <div style={{ padding: 20, marginTop: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Stored JWT Token</h2>
      {token ? (
        <textarea readOnly value={token} rows={4} style={{ width: "100%" }} />
      ) : (
        <p>No token found. Please login first.</p>
      )}
    </div>
  );
}
