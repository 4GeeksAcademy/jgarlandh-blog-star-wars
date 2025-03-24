import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import ModalPeople from './ModalPeople.jsx';
import ModalPlanet from './ModalPlanet.jsx';
import ModalVehicle from './ModalVehicle.jsx';

const FavoritesDropdown = () => {
  const { store, actions } = useContext(Context);
  const [activeModal, setActiveModal] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const handleFavoriteClick = (favorite) => {
    setCurrentItem(favorite.data);
    switch(favorite.type) {
      case 'people':
        setActiveModal('people');
        break;
      case 'planet':
        setActiveModal('planet');
        break;
      case 'vehicle':
        setActiveModal('vehicle');
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setCurrentItem(null);
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      <DropdownButton
        title={`Favorites (${store.favorites.length})`}
        variant="primary"
        id="favorites-dropdown"
      >
        {store.favorites.length > 0 ? (
          store.favorites.map((favorite) => (
            <Dropdown.Item 
              key={favorite.id} 
              className="d-flex justify-content-between align-items-center"
            >
              <span 
                onClick={() => handleFavoriteClick(favorite)}
                style={{ cursor: 'pointer', flex: 1 }}
              >
                {favorite.name}
              </span>
              <button 
                className="btn btn-sm btn-danger ms-2"
                onClick={(e) => {
                  e.stopPropagation();
                  actions.removeFavorite(favorite.id);
                }}
              >
                ×
              </button>
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item>Aún no se han agregado Favoritos</Dropdown.Item>
        )}
      </DropdownButton>

      {/* Modales */}
      {activeModal === 'people' && currentItem && (
        <ModalPeople
          isOpen={true}
          onClose={closeModal}
          name={currentItem.name}
          image={currentItem.image}
          height={currentItem.height}
          mass={currentItem.mass}
          hair_color={currentItem.hair_color}
          skin_color={currentItem.skin_color}
          eye_color={currentItem.eye_color}
          birth_year={currentItem.birth_year}
        />
      )}

      {activeModal === 'planet' && currentItem && (
        <ModalPlanet
          isOpen={true}
          onClose={closeModal}
          name={currentItem.name}
          image={currentItem.image}
          rotation_period={currentItem.rotation_period}
          orbital_period={currentItem.orbital_period}
          diameter={currentItem.diameter}
          climate={currentItem.climate}
          gravity={currentItem.gravity}
          terrain={currentItem.terrain}
          surface_water={currentItem.surface_water}
          population={currentItem.population}
        />
      )}

      {activeModal === 'vehicle' && currentItem && (
        <ModalVehicle
          isOpen={true}
          onClose={closeModal}
          name={currentItem.name}
          image={currentItem.image}
          model={currentItem.model}
          manufacturer={currentItem.manufacturer}
          cost_in_credits={currentItem.cost_in_credits}
          length={currentItem.length}
          max_atmosphering_speed={currentItem.max_atmosphering_speed}
          crew={currentItem.crew}
          passengers={currentItem.passengers}
          cargo_capacity={currentItem.cargo_capacity}
          vehicle_class={currentItem.vehicle_class}
        />
      )}
    </div>
  );
};

export default FavoritesDropdown;