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
                  <Link to="/signup" className="login-link"> Crea una cuenta</Link>
                </p>
            </div>
        </main>
    );
};
