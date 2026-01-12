import { Link } from "react-router-dom";

const SignupFooter = () => {
  return (
    <div className="signup-footer">
      <p>
        ¿Ya tienes cuenta?
        <Link className="signup-link" to="/login">
          {" "}
          Inicia sesión
        </Link>
      </p>
    </div>
  );
};

export default SignupFooter;
