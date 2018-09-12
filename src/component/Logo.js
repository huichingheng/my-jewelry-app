import React from "react";
import logo from "../img/logo.png";
import "../style/Logo.css";

const Logo = () => {
  return (
    <div className="container">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};

export default Logo;
