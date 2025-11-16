import React from "react";

const QuoteButtonNoTimeout = ({ setResult }) => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setResult(`"${data.content}" — ${data.author}`);
      } catch (err) {
        setResult("Error fetching quote");
      }
    };
  
    return (
      <button onClick={fetchQuote} style={{ margin: "5px" }}>
        Api Call without Timeout
      </button>
    );
  };
  
  export default QuoteButtonNoTimeout;
