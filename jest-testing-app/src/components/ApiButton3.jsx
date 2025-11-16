import React from "react";

const DogButtonPromise = ({ setResult }) => {
  const fetchDog = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();  // also returns a Promise

      setResult(
        <img
          src={data.message}
          alt="Random Dog"
          style={{ maxWidth: "300px" }}
        />
      );
    } catch (error) {
      setResult("Error fetching dog image");
    }
  };

  return (
    <button onClick={fetchDog} style={{ margin: "5px" }}>
      Api Call with Promise
    </button>
  );
};

export default DogButtonPromise;
