import { data } from "react-router-dom";
import "../../../styles/maintenance.css";

const MaintenanceCard = () => ({
    title = "Seguimiento de mantenimiento",
    showTitle = true,
    showActionButton = false,
    data = {
        llantas: 85,
        frenos: 42,
        cadena: 12
    }
}) => {
    return (
        <section className="maintenance">
            {showTitle && <h2>{title}</h2>}

            <div className="bar">
                <span>Llantas</span>
                <div className="progress">
                    <div className="ok" style={{ width: `${data.llantas}%`}} />
                </div>
            </div>

            <div className="bar">
                <span>Frenos</span>
                <div className="progress">
                    <div className="warn" style={{ width: `${data.frenos}%`}} />
                </div>
            </div>

            <div className="bar">
                <span>Cadena</span>
                <div className="progress">
                    <div className="bad" style={{ width: `${data.cadena}%`}} />
                </div>
            </div>

            {showActionButton && (
                <button className="maintenance-btn">
                    Actualizar
                </button>
            )}
        </section>
    );
};

export default MaintenanceCard;