const BikeCard = ({ name, specs, km, image, active }) => {
  return (
    <div className={`bike-card ${active ? "active" : ""}`}>
      {active && <span className="badge">Activa</span>}

      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p className="specs">{specs}</p>

      <div className="bike-footer">
        <span>{km}</span>
        <button>{active ? "Detalles" : "Seleccionar"}</button>
      </div>
    </div>
  );
};

export default BikeCard;
