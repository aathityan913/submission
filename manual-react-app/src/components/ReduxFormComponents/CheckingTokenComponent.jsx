import React from "react";
import { useSelector } from "react-redux";
import { isTokenValid } from "../../utils/token"; // path to your helper

const SomeComponent = () => {
  const { token } = useSelector((state) => state.form);

  if (!token) return <p>No token generated yet.</p>;

  return (
    <div>
      {isTokenValid(token) ? (
        <p>✅ Token is valid: {token.token}</p>
      ) : (
        <p>⛔ Token expired</p>
      )}
    </div>
  );
};

export default SomeComponent;
