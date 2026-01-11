import "../../styles/login.css";
import LoginHeader from "../component/LoginHeader";
import LoginForm from "../component/LoginForm";
import SocialLogin from "../component/SocialLogin";
import { Link } from "react-router-dom";


export const Login = () => {
    return (
        <main className="login-page">
            <LoginHeader />
            <LoginForm />
            <SocialLogin />
            
            <div className="login-footer">
                <p>
                  ¿Nuevo en la ruta?
                  <span className="login-link"> Crear una cuenta</span>
                </p>

                <p className="login-about">
                    <Link to="/about" className="login-link">ABOUT US</Link>

                </p>
            
            </div>
        </main>
    );
};
