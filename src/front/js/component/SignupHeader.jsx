import React from "react";
import logo from "../../../assets/trail.png";

const SignupHeader = () => {
    return (
      <div className="signup-header">
        <img
           src= {logo}
           alt="Trail logo"
           className="login-logo"
        />
      </div>
    );
};

export default SignupHeader;