import React from "react";
import hero from "../img/wedding-3369645_1920.jpg";
import "../style/Hero.css"

const Hero = props => {
  return (
    <div id="hero">
      <div className="img-container">
        <img
          src={hero}
          alt="new in"
        />
      </div>
      <div className="directory">
        Home / New In
      </div>
    </div>
  );
};

export default Hero;
