import React from "react";
import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantList({plants, searchTerm}) {
  const filteredPlants = plants.filter((plant)=> plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      <ul className="cards">
        
        {/* render PlantCards components in here */}
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            price={plant.price}
            image={plant.image}
          />
        ))}
      </ul>
    </>
  );
}

export default PlantList;
