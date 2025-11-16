import React from "react";
const JokeButtonWithTimeout = ({ setResult }) => {
  const fetchJoke = async () => {
    setTimeout(async () => {
      try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        setResult(`${data.setup} - ${data.punchline}`);
      } catch (err) {
        setResult("Error fetching joke");
      }
    }, 1000); // 1 second delay
  };

  return (
    <button onClick={fetchJoke} style={{ margin: "5px" }}>
      Api Call with Timeout
    </button>
  );
};

export default JokeButtonWithTimeout;