import React from "react";
import logo from "../../../../assets/trail.png";

const SignupHeader = () => {
    return (
      <div className="signup-header">
        <img
           src= {logo}
           alt="Trail logo"
           className="login-logo"
        />
        <h1 className="signup-title">REGÍSTRATE Y RUEDA</h1>
        <p className="signup-subtitle">
           Crea una cuenta para sincronizar tus rutas de gravel y MTB.
        </p>
      </div>
      
      
    );
};

export default SignupHeader;