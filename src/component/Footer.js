import React from "react";
import "../style/Footer.css";
import facebookIcon from "../icon/facebook-icon.svg";
import instagramIcon from "../icon/instagram-icon.svg";
import youtubeIcon from "../icon/youtube-icon.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="column">
          <div className="column-1">
            <h4>Company</h4>
            <p>visit us</p>
            <p>careers</p>
            <p>about</p>
          </div>
          <div className="column-3">
            <h4>Mailing List</h4>
            <p>
              Sign up to get access to latest trend, exclusive invites and
              special offers.
            </p>
            <form action="">
              <input type="email" placeholder="Enter your email address" />
              <span className="send-button">Send</span>
            </form>
            <span className="social-media-icon">
              <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="icon" src={facebookIcon} alt="facebook-icon" />
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="icon"
                  src={instagramIcon}
                  alt="instagram-icon"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="icon" src={youtubeIcon} alt="youtube-icon" />
              </a>
            </span>
          </div>
        </div>
        <div className="bottom-line">
          © 2018 Pausin Pte Ltd. All Copyright Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
