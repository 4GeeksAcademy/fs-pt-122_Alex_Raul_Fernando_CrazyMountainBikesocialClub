import "../../styles/login.css";
import SignupHeader from "../component/Signup/SignupHeader";
import SignupForm from "../component/Signup/SignupForm";
import SocialSignup from "../component/Signup/SocialSignup";
import SignupFooter from "../component/Signup/SignupFooter";

export const Signup = () => {
  return (
    <main className="signup-page">
      <SignupHeader />
      <SignupForm />
      <SocialSignup />
      <SignupFooter />
    </main>
  );
};