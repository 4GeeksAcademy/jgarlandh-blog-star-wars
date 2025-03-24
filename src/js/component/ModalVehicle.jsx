import React from 'react';

const ModalVehicle = ({ isOpen, onClose, name, image, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, vehicle_class }) => {
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
            <strong>Model:</strong> {model}
          </div>
          <div style={styles.infoRow}>
            <strong>Manufacturer:</strong> {manufacturer}
          </div>
          <div style={styles.infoRow}>
            <strong>Cost in Credits:</strong> {cost_in_credits}
          </div>
          <div style={styles.infoRow}>
            <strong>Length:</strong> {length}
          </div>
          <div style={styles.infoRow}>
            <strong>Max Atmosphering Speed:</strong> {max_atmosphering_speed}
          </div>
          <div style={styles.infoRow}>
            <strong>Crew:</strong> {crew}
          </div>
          <div style={styles.infoRow}>
            <strong>Passengers:</strong> {passengers}
          </div>
          <div style={styles.infoRow}>
            <strong>Cargo Capacity:</strong> {cargo_capacity}
          </div>
          <div style={styles.infoRow}>
            <strong>Vehicle Class:</strong> {vehicle_class}
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

export default ModalVehicle;