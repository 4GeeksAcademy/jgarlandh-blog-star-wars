import React, { useState } from 'react';
import planetData from "../../img/planet.json";
import ModalPlanet from './ModalPlanet.jsx'; // Importa el componente ModalPlanet

const Planet = ({ name, population, terrain, id, rotation_period, orbital_period, diameter, climate, gravity, surface_water }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const planetImage = planetData?.planets?.find(planet => planet.id === id)?.image || "https://via.placeholder.com/300";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        <img src={planetImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Population: <strong>{population}</strong></p>
          <p className="card-text">Terrain: <strong>{terrain}</strong></p>
          <div className='d-flex justify-content-between'>
            <button className="btn btn-primary" onClick={openModal}>Learn more</button>
            <button className='btn btn-dark'>Like</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalPlanet
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        image={planetImage}
        rotation_period={rotation_period}
        orbital_period={orbital_period}
        diameter={diameter}
        climate={climate}
        gravity={gravity}
        terrain={terrain}
        surface_water={surface_water}
        population={population}
      />
    </>
  );
};

export default Planet;