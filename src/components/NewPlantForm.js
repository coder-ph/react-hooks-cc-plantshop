import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [addPlant, setAddPlant] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function HnadleChange(e) {
    setAddPlant({
      ...addPlant,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: addPlant.name,
      image: addPlant.image,
      price: addPlant.price,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          onChange={HnadleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={HnadleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={HnadleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button onClick={handleSubmit} type="submit">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
