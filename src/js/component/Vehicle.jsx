import React from 'react';
import vehicleData from "../../img/vehicle.json";

const Vehicle = ({ name, passengers, cargo_capacity, max_atmosphering_speed, id }) => {
  const vehicleImage = vehicleData?.vehicles?.find(vehicle => vehicle.id === id)?.image || "https://via.placeholder.com/300";

  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={vehicleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Passengers: <strong>{passengers}</strong></p>
        <p className="card-text">Cargo Capacity: <strong>{cargo_capacity}</strong></p>
        <p className="card-text">Max. Atm. Speed: <strong>{max_atmosphering_speed}</strong></p>
        <div className='d-flex justify-content-between'>
          <a href="#" className="btn btn-primary">More Info</a>
          <button className='btn btn-dark'>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;