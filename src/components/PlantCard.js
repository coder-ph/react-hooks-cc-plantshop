import React, { useState } from "react";
import Search from "./Search";

function PlantCard({image, id, name, price}) {
  const[isAvailable, setIsAvailable] = useState(true)

  function handleChangeAvaolable(){
    setIsAvailable(!isAvailable)
  }
  return (
    <>
      <li className="card" data-testid="plant-item">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {isAvailable ? (
          <button onClick={handleChangeAvaolable} className="primary">
            In Stock
          </button>
        ) : (
          <button onClick={handleChangeAvaolable}>Out of Stock</button>
        )}
      </li>
    </>
  );
}

export default PlantCard;
