import "../../styles/login.css";
import LoginHeader from "../component/LoginHeader";
import LoginForm from "../component/LoginForm";
import SocialLogin from "../component/SocialLogin";
import LoginFooter from "../component/LoginFooter";

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
