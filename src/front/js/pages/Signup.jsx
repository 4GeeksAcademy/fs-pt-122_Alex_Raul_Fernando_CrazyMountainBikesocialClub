import "../../styles/login.css";
import SignupHeader from "../component/SignupHeader";
import SignupForm from "../component/SignupForm";
import SocialSignup from "../component/SocialSignup";
import SignupFooter from "../component/SignupFooter";

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