import React, { useState, useContext } from 'react';
import vehicleData from "../../img/vehicle.json";
import ModalVehicle from './ModalVehicle.jsx';
import { Context } from '../store/appContext'; // Importamos el contexto

const Vehicle = ({ name, passengers, cargo_capacity, max_atmosphering_speed, id, model, manufacturer, cost_in_credits, length, crew, vehicle_class }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { actions } = useContext(Context); // Obtenemos las acciones del contexto

  const vehicleImage = vehicleData?.vehicles?.find(vehicle => vehicle.id === id)?.image || "https://via.placeholder.com/300";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddFavorite = () => {
    actions.addFavorite('vehicle', {
      id,
      name,
      image: vehicleImage,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      vehicle_class
    });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        <img src={vehicleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Passengers: <strong>{passengers}</strong></p>
          <p className="card-text">Cargo Capacity: <strong>{cargo_capacity}</strong></p>
          <p className="card-text">Max. Atm. Speed: <strong>{max_atmosphering_speed}</strong></p>
          <div className='d-flex justify-content-between'>
            <button className="btn btn-primary" onClick={openModal}>Learn more</button>
            <button 
              className='btn btn-dark' 
              onClick={handleAddFavorite}
            >
              Like
            </button>
          </div>
        </div>
      </div>

      <ModalVehicle
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        image={vehicleImage}
        model={model}
        manufacturer={manufacturer}
        cost_in_credits={cost_in_credits}
        length={length}
        max_atmosphering_speed={max_atmosphering_speed}
        crew={crew}
        passengers={passengers}
        cargo_capacity={cargo_capacity}
        vehicle_class={vehicle_class}
      />
    </>
  );
};

export default Vehicle;