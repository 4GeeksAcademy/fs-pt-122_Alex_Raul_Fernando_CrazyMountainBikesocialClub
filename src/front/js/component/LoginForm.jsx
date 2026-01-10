import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("login enviado:", { email, password });
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

            <button className="login-button">
                INICIAR SESIÓN
            </button>
        </form>
    );
};

export default LoginForm