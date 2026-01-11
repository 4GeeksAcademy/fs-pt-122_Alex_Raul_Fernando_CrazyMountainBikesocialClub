const SignupForm = ({ onSubmit, email, setEmail, password, setPassword }) => {
  return (
<form className="signup-form" onSubmit={onSubmit}>
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

        <button type="submit" className="signup-button">Lánzate al trail</button>
      </form>
    );
};

export default SignupForm;