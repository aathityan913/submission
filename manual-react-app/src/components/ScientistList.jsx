// src/App.jsx
import React from "react";
import  people from "./../data";
import ScientistCategory from './ScientistCategory';

export default function ScientistList() {
  return (
    <div>
       <ScientistCategory
        title="Famous Scientists"
        people={people}
        filterCategory="Scientist"
      />

      {/* Mathematician section */}
      <ScientistCategory
        title="Famous Mathematicians"
        people={people}
        filterCategory="Mathematician"
      />
    </div>
  );
}
