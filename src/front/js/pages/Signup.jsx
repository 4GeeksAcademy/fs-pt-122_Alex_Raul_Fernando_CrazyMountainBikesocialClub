import "../../styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialSignup from "../component/SocialSignup";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);

    const resp = await fetch("http://127.0.0.1:3001/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      setError(data.msg || "Error en registro");
      return;
    }

    navigate("/login");
  };

  return (
    <main className="signup-page">
      <h1 className="signup-title">REGÍSTRATE Y RUEDA</h1>

      {error && <div className="auth-error">{error}</div>}

      <form className="signup-form" onSubmit={submit}>
        <label>Correo electrónico</label>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="ciclista@trail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label>Contraseña</label>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="signup-button">Lánzate al trail</button>
      </form>
      <SocialSignup />
      <div className="signup-footer">
        <p>
          ¿Ya tienes cuenta?
          <Link className="signup-link" to="/login">
            {" "}
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  );
};
