import "../../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialSignup from "../component/SocialSignup";
import SignupHeader from "../component/SignupHeader";
import SignupForm from "../component/SignupForm";
import SignupFooter from "../component/SignupFooter";

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
      body: JSON.stringify({ email, password }),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      setError(data.msg || "Error en registro");
      return;
    }

    navigate("/login");
  };

  return (
    <main className="signup-page">
      <SignupHeader />
      {error && <div className="auth-error">{error}</div>}
      <SignupForm />
      <SocialSignup />
      <SignupFooter />
    </main>
  );
};
