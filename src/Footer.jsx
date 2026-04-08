import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2 className="logo">__footer</h2>
          <p className="tagline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ipsa numquam..
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ZeasTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;