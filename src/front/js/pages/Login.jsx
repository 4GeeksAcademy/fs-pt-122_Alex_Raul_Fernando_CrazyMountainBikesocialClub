import "../../styles/login.css";
import LoginHeader from "../component/LogIn/LoginHeader";
import LoginForm from "../component/LogIn/LoginForm";
import SocialLogin from "../component/LogIn/SocialLogin";
import LoginFooter from "../component/LogIn/LoginFooter";

export const Login = () => {
    return (
        <main className="login-page">
            <LoginHeader />
            <LoginForm />
            <SocialLogin />
            <LoginFooter />
        </main>
    );
};
