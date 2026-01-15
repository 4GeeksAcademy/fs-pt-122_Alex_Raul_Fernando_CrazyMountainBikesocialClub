import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

import WeeklyKms from "../component/Home/WeeklyKms";
import StartRouteButton from "../component/Home/StartRouteButton";
import FeaturedRoutes from "../component/Home/FeaturedRoutes";
import FriendsActivity from "../component/Home/FriendsActivity";
import MaintenanceCard from "../component/Maintenance/MaintenanceCard";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Bienvenido a ATrail...</h2>
        <p>Cargando perfil...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>Inicio</h1>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar sesión
        </button>
      </header>

      <main className="home-content">
        <WeeklyKms />
        <StartRouteButton />
        <FeaturedRoutes />
        <FriendsActivity />
        <MaintenanceCard title="Mantenimiento" showTitle={true} showActionButton={false} />
      </main>
    </div>
  );
};

export default Home;
