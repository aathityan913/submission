// src/components/CategorySection.jsx
import React from "react";
import ScientistCard from "./ScientistCard";

const CategorySection = ({ title, people=[], filterCategory }) => {
  // Filter based on category
  const filteredPeople = people.filter(
    (person) => person.category === filterCategory
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "25px" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {filteredPeople.map((person) => (
          <ScientistCard
            key={person.id}
            name={person.name}
            image={person.image}
            description={person.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
