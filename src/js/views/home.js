import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import People from "../component/People.jsx";
import Planet from "../component/Planet.jsx";
import Vehicle from "../component/Vehicle.jsx"; // Asegúrate de importar Vehicle

export const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  console.log("Characters in store:", store.characters);
  console.log("Planets in store:", store.planets);
  console.log("Vehicles in store:", store.vehicles);

  return (
    <div className="text-center mt-5">
      <h1>Star Wars</h1>
      <br />
      <h2>Personajes</h2>
      <div className="d-flex flex-row overflow-scroll">
        {store.characters && store.characters.length > 0 ? (
          store.characters.map((personaje, index) => (
            <People
              key={index}
              name={personaje.name}
              gender={personaje.gender}
              hair={personaje.hair_color}
              eye={personaje.eye_color}
              id={index}
            />
          ))
        ) : (
          <p>No se han cargado personajes</p>
        )}
      </div>
      <br />
      <h2>Planetas</h2>
      <div className="d-flex flex-row overflow-scroll">
        {store.planets && store.planets.length > 0 ? (
          store.planets.map((planeta, index) => (
            <Planet
              key={index}
              name={planeta.name}
              population={planeta.population}
              terrain={planeta.terrain}
              id={index}
            />
          ))
        ) : (
          <p>No se han cargado planetas</p>
        )}
      </div>
      <br />
      <h2>Vehículos</h2>
      <div className="d-flex flex-row overflow-scroll">
        {store.vehicles && store.vehicles.length > 0 ? (
          store.vehicles.map((vehiculo, index) => (
            <Vehicle
              key={index}
              name={vehiculo.name}
              passengers={vehiculo.passengers}
              cargo_capacity={vehiculo.cargo_capacity}
              max_atmosphering_speed={vehiculo.max_atmosphering_speed}
              id={index}
            />
          ))
        ) : (
          <p>No se han cargado vehículos</p>
        )}
      </div>
    </div>
  );
};