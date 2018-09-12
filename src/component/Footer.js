import React from "react";
import "../style/Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="column">
        <div className="column-1">
          <h4>Company</h4>
          <p>visit us</p>
          <p>careers</p>
          <p>about</p>
        </div>
        <div className="column-2">
          <h4>Get Social</h4>
          <p>facebook</p>
          <p>youtube</p>
          <p>instagram</p>
        </div>
        <div className="column-3">
          <h4>Mailing List</h4>
          <p>
            sign up to get access to latest trend, exclusive invites and special
            offers.
          </p>
          <form action="">
          <input type="text" placeholder="Enter your email address"/>
          </form>
        </div>
      </div>
      <div className="bottom-line">
        © 2018 Pausin Pte Ltd. All Copyright Reserved.
      </div>
    </div>
  );
};

export default Footer;
