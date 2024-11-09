import {React, useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

   const [searchTerm, setSearchTerm] = useState("");
   const [plants, setPlants] = useState([]);

    useEffect(() => {
      fetch("http://localhost:6001/plants")
        .then((r) => r.json())
        .then((plants) => setPlants(plants));
    }, []);

   const searchedPlant = plants.filter((plant) =>
     plant.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants} searchTerm={searchTerm}/>
    </main>
  );
}

export default PlantPage;
