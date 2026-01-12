import React from "react";
import logo from "../../../../assets/trail.png";

const LoginHeader = () => {
    return (
      <div className="login-header">
        <img
           src= {logo}
           alt="Trail logo"
           className="login-logo"
        />
        
        <h1 className="login-title">DOMINA CADA SENDERO</h1>

        <p className="login-subtitle">
           Inicia sesión para sincronizar tus rutas de gravel y MTB.
        </p>
      </div>
    );
};

export default LoginHeader;