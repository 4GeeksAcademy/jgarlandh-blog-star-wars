import React from 'react';

const ModalPlanet = ({ isOpen, onClose, name, image, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Botón para cerrar el modal */}
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {/* Primer div: Imagen y nombre */}
        <div style={styles.topSection}>
          <img src={image} alt={name} style={styles.avatar} />
          <div style={styles.nameSection}>
            <h1 style={styles.name}>{name}</h1>
            <p style={styles.loremText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Segundo div: Información detallada */}
        <div style={styles.bottomSection}>
          <div style={styles.infoRow}>
            <strong>Rotation Period:</strong> {rotation_period}
          </div>
          <div style={styles.infoRow}>
            <strong>Orbital Period:</strong> {orbital_period}
          </div>
          <div style={styles.infoRow}>
            <strong>Diameter:</strong> {diameter}
          </div>
          <div style={styles.infoRow}>
            <strong>Climate:</strong> {climate}
          </div>
          <div style={styles.infoRow}>
            <strong>Gravity:</strong> {gravity}
          </div>
          <div style={styles.infoRow}>
            <strong>Terrain:</strong> {terrain}
          </div>
          <div style={styles.infoRow}>
            <strong>Surface Water:</strong> {surface_water}
          </div>
          <div style={styles.infoRow}>
            <strong>Population:</strong> {population}
          </div>
        </div>
      </div>
    </div>
  );
};


const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '100%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  topSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    marginRight: '20px',
  },
  nameSection: {
    flex: 1,
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  loremText: {
    fontSize: '14px',
    color: '#666',
  },
  bottomSection: {
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  infoRow: {
    marginBottom: '10px',
    fontSize: '16px',
  },
};

export default ModalPlanet;