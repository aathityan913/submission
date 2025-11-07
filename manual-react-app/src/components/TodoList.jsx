import React from "react";

const TodoList = () => {
  // Get the current day dynamically

  const name="Abraham Lincoln";
  const color="black";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const currentDay = days[today.getDay()];

  return (
  <div>
    <h3>To-do list on {currentDay}</h3>
    <ul style={{ backgroundColor: color, 
          listStylePosition: "inside", // Moves bullet closer to text
          paddingLeft: "0",            // Removes extra space
          marginLeft: "0",             // Aligns neatly
 }}>
  <h1 style={{color:"white"}}>{name}</h1>
  <img src="https://cdnb.artstation.com/p/assets/images/images/063/300/661/medium/achiever-lucas145-abraham-lincoln-1.jpg?1685207502" height={100}/>
<li style={{ color: "white" }} >Abraham Lincoln was the 16th President of the United States, serving from 1861 to 1865.</li>

<li style={{ color: "white" }}>He led the country through the Civil War and worked to end slavery with the Emancipation Proclamation.</li>

<li style={{ color: "white" }}>Lincoln was assassinated in 1865, becoming a symbol of freedom, unity, and democracy.</li>
   </ul>
  </div>
  );
};

export default TodoList;
