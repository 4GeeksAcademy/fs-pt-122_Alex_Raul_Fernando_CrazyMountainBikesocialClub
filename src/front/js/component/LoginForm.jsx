import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
    const resp = await fetch("http://127.0.0.1:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    }
    
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
                />
                <span
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                >

                </span>
            </div>

            <span className="forgot-password">¿OLVIDASTE TU CONTRASEÑA?</span>

            <button type="submit" className="login-button">
                INICIAR SESIÓN
            </button>
        </form>
    );
};

export default LoginForm