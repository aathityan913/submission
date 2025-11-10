import React, { useState, useRef } from "react";

export default function FormComponent({ setFormData }) {
  const [username, setUsername] = useState("Sriram");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Ref for username input
  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
    // Focus on username after submit
    if (usernameRef.current) usernameRef.current.focus();
  };

  const handleClear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    // Focus on username after clear
    if (usernameRef.current) usernameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef} // attach ref here
        />
      </div>
      <div style={{ margin: "10px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ margin: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" style={{ marginRight: "10px" }}>
        Submit
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}
