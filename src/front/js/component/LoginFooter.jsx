import { Link } from "react-router-dom";

const LoginFooter = () => {
    return (
            <div className="login-footer">
                <p>
                  ¿Nuevo en la ruta?
                  <Link to="/signup" className="login-link"> Crea una cuenta</Link>
                </p>
                 <p className="login-about">
                    <Link to="/about" className="login-link">ABOUT US</Link>
                </p>
            </div>
    );
};

export default LoginFooter;