import React, { useEffect, useState } from "react";

const FetchComponent = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://us.cnn.com"); // try fetching CNN
        const data = await response.text(); // get HTML as text
        setHtml(data);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched HTML Content</h2>

      {/* Display raw HTML safely */}
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        <pre>{html}</pre>
      </div>
    </div>
  );
};

export default FetchComponent;
