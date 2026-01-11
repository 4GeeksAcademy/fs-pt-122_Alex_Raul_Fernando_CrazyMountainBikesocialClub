import "../../styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      body: JSON.stringify({ email, password })
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      setError(data.msg || "Error en registro");
      return;
    }

    navigate("/login");
  };

  return (
    <main className="login-page">
      <h1 className="login-title">CREAR CUENTA</h1>

      {error && <div className="auth-error">{error}</div>}

      <form className="login-form" onSubmit={submit}>
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

        <button className="login-button">CREAR CUENTA</button>
      </form>

      <div className="login-footer">
        <p>
          ¿Ya tienes cuenta?
          <Link className="login-link" to="/login"> Inicia sesión</Link>
        </p>
      </div>
    </main>
  );
};
