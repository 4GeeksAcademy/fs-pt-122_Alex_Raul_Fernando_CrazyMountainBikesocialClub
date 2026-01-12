import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await resp.json();

      if (!resp.ok) {
        setError(data.msg || "Error en login");
        return;
      }

      // GUARDA SESIÓN
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // → HOME
      navigate("/home");
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Correo electrónico</label>
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="ciclista@trail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <label>Contraseña</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <span
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          👁️
        </span>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <span className="forgot-password">¿OLVIDASTE TU CONTRASEÑA?</span>

      <button type="submit" className="login-button" disabled={loading}>
        {loading ? "Iniciando..." : "INICIAR SESIÓN"}
      </button>
    </form>
  );
};

export default LoginForm;
