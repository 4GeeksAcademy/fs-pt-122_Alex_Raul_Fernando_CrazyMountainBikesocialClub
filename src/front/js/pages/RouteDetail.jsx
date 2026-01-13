import { useParams, useNavigate } from "react-router-dom";
import "../../styles/routeDetail.css";

const RouteDetail = () => {
    const { routeId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="route-detail">
            <header className="route-detail-header">
                <button onClick={() => navigate(-1)}>Volver</button>
                <h1>Detalle de la ruta</h1>
            </header>

            <main className="route-detail-content">
                
                <section className="route-summary">
                    <p><strong>ID Ruta:</strong> {routeId}</p>
                    <p><strong>Distancia:</strong> 24.5 km</p>
                    <p><strong>Duración:</strong> 1h 12m</p>
                    <p><strong>Desnivel:</strong> 840 m</p>
                </section>

                <section className="noute-map">
                    <h2>Mapa de la ruta (placeholder</h2>

                    <img 
                        className="route-map-image"
                        src="https://maps.googleapis.com/maps/api/staticmap?center=40.4168,-3.7038&zoom=11&size=600x300&path=color:0xf2b90c|40.42,-3.70|40.41,-3.69|40.40,-3.71" 
                        alt="Mapa de la ruta" 
                    />
                </section>
            </main>
        </div>
    );
};

export default RouteDetail;