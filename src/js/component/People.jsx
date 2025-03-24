import React, { useState } from 'react';
import peopleData from "../../img/people.json";
import ModalPeople from './ModalPeople.jsx'; // Importa el componente ModalPeople

const People = ({ name, gender, hair_color, eye_color, id, height, mass, skin_color, birth_year }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const peopleImage = peopleData.people.find(person => person.id === id)?.image || "https://via.placeholder.com/300";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        <img src={peopleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Gender: <strong>{gender}</strong></p>
          <p className="card-text">Hair Color: <strong>{hair_color}</strong></p>
          <p className="card-text">Eye Color: <strong>{eye_color}</strong></p>
          <div className='d-flex justify-content-between'>
            <button className="btn btn-primary" onClick={openModal}>Learn more</button>
            <button className='btn btn-dark'>Like</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalPeople
        isOpen={isModalOpen}
        onClose={closeModal}
        name={name}
        image={peopleImage}
        height={height}
        mass={mass}
        hair_color={hair_color}
        skin_color={skin_color}
        eye_color={eye_color}
        birth_year={birth_year}
      />
    </>
  );
};

export default People;