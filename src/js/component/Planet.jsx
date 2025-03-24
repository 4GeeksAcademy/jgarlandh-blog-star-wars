import React from 'react';
import planetData from "../../img/planet.json";

const Planet = ({ name, population, terrain, id }) => {
  const planetImage = planetData?.planets?.find(planet => planet.id === id)?.image || "https://via.placeholder.com/300";

  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={planetImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Population: <strong>{population}</strong></p>
        <p className="card-text">Terrain: <strong>{terrain}</strong></p>
        <div className='d-flex justify-content-between'>
          <a href="#" className="btn btn-primary">More Info</a>
          <button className='btn btn-dark'>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Planet;