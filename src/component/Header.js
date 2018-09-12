import React from "react";
import "../style/Header.css"

const Header = () => {
  return (
    <div id="main-header">
      <span>Welcome to my jewerly app</span>
      <span className="float-right">login / sign up | language | cart</span>
    </div>
  );
};

export default Header;
