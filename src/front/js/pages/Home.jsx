import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica sesión
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      localStorage.clear();
      navigate("/login");
      return;
    }

    setUser(JSON.parse(storedUser));
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
    <div className="home-page">
      <header className="home-header">
        <h1>¡Bienvenido {user.email}!</h1>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar Sesión
        </button>
      </header>

      <main className="home-content">
        <div className="dashboard">
          <h2>Tu Perfil</h2>
          <p>ID: <strong>{user.id}</strong></p>
          <p>Email: <strong>{user.email}</strong></p>
          
          <div className="quick-actions">
            <button className="btn-primary">Mi Perfil</button>
            <button className="btn-secondary">Configuración</button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;