import React from 'react';
import peopleData from "../../img/people.json";

const People = ({ name, gender, hair, eye, id }) => {
  const peopleImage = peopleData?.people?.find(person => person.id === id)?.image || "https://via.placeholder.com/300";

  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={peopleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Gender: <strong>{gender}</strong></p>
        <p className="card-text">Hair Color: <strong>{hair}</strong></p>
        <p className="card-text">Eye Color: <strong>{eye}</strong></p>
        <div className='d-flex justify-content-between'>
          <a href="#" className="btn btn-primary">More Info</a>
          <button className='btn btn-dark'>Like</button>
        </div>
      </div>
    </div>
  );
};

export default People;