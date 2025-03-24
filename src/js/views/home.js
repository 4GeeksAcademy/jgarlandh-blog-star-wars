import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import People from "../component/People.jsx";
import Planet from "../component/Planet.jsx";
import Vehicle from "../component/Vehicle.jsx";
import FavoritesDropdown from "../component/FavoritesDropdown.jsx";

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
      {/* Dropdown de Favoritos - Posicionado en la esquina superior derecha */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
        <FavoritesDropdown />
      </div>
      
      <h1>Star Wars</h1>
      <br />
      
      {/* Sección de Personajes */}
      <h2>Personajes</h2>
      <div className="d-flex flex-row overflow-scroll">
        {store.characters && store.characters.length > 0 ? (
          store.characters.map((personaje, index) => (
            <People
              key={index}
              name={personaje.name}
              gender={personaje.gender}
              hair_color={personaje.hair_color}
              eye_color={personaje.eye_color}
              id={index}
              height={personaje.height}
              mass={personaje.mass}
              skin_color={personaje.skin_color}
              birth_year={personaje.birth_year}
            />
          ))
        ) : (
          <p>No se han cargado personajes</p>
        )}
      </div>
      <br />
      
      {/* Sección de Planetas */}
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
              rotation_period={planeta.rotation_period}
              orbital_period={planeta.orbital_period}
              diameter={planeta.diameter}
              climate={planeta.climate}
              gravity={planeta.gravity}
              surface_water={planeta.surface_water}
            />
          ))
        ) : (
          <p>No se han cargado planetas</p>
        )}
      </div>
      <br />
      
      {/* Sección de Vehículos */}
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
              model={vehiculo.model}
              manufacturer={vehiculo.manufacturer}
              cost_in_credits={vehiculo.cost_in_credits}
              length={vehiculo.length}
              crew={vehiculo.crew}
              vehicle_class={vehiculo.vehicle_class}
            />
          ))
        ) : (
          <p>No se han cargado vehículos</p>
        )}
      </div>
    </div>
  );
};