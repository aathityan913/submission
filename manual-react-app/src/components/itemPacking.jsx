import React from 'react';
// Child component
function Item({ name, isPacked }) {
    return (
      <li>
        {name} {isPacked ? "✅" : "❌"}
      </li>
    );
  }
  
  // Parent component
  export default function ItemPacking() {
    const items = [
      { name: "Toothbrush", isPacked: true },
      { name: "Towel", isPacked: false },
      { name: "Charger", isPacked: true },
      { name: "Socks", isPacked: false },
    ];
  
    return (
      <div>
        <h2>My Packing List</h2>
        <ul style={{listStylePosition: "inside", // Moves bullet closer to text
            paddingLeft: "0",            // Removes extra space
            marginLeft: "0", }}>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <br></br>
      <h2>After checking My Packing List</h2>
        <ul style={{
            listStylePosition: "inside", // Moves bullet closer to text
            paddingLeft: "0",            // Removes extra space
            marginLeft: "0", }}>
          {items.map((item, index) => (
            <Item key={index} name={item.name} isPacked={item.isPacked} />
          ))}
        </ul>
      </div>
    );
  }