import React from "react";
import "../style/Navbar.css"

const NavBar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <ul>
          <li> <link rel="stylesheet" href="#"/>new in</li>
          <li> <link rel="stylesheet" href="#"/>jewelry</li>
          <li> <link rel="stylesheet" href="#"/>collection</li>
          <li> <link rel="stylesheet" href="#"/>gift guide</li>
          <li> <link rel="stylesheet" href="#"/>sale</li>
          <input type="text" placeholder="search items..." icon=""/>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
