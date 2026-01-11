import { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await resp.json();

      if (!resp.ok) {
        alert(data.msg || "Error en registro");
        return;
      }

      alert("¡Registrado correctamente!");
    } catch (err) {
      alert("Error de conexión");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label>Correo electrónico</label>
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="ciclista@trail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
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
          autoComplete="new-password"
        />
      </div>

      <button type="submit" className="signup-button">
        Lánzate al trail
      </button>
    </form>
  );
};

export default SignupForm;
