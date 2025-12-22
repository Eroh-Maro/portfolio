// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <h3>SWE</h3>
          <p>
            Software Engineer & Digital Problem Solver.
            Building clean, scalable, and user-focused solutions.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/about">About</Link>
          <Link to="/servicesPage">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact / Socials */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="mailto:youremail@email.com">
              <img src={email} alt="Email" />
            </a>
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 Mr. Eroh Maro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
