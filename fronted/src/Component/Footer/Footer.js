import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import Wp from '../Footer/Wp'
import img from '../Landing_Page/Menubar_Page/logo.jpg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <h3> ABOUT </h3> */}
          <img src={img} alt="Logo" style={{height:'auto',width:'70px'}}/>

          <ul>
            <h3 className="styled-heading">
              Mountain views can vary greatly depending on the location, season,
              and weather. In winter, snow-capped peaks can add a majestic feel,
              while in summer, the lush greenery can give a more vibrant and
              inviting atmosphere.
            </h3>
          </ul>
        </div>

        <div className="footer-section">
          <h3> QUICK LINK</h3>
          <ul>
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/careers">About</Link>
            </li>
            <li>
              <Link to="/press">Service</Link>
            </li>
            <li>
              <Link to="/corporate-info">Event</Link>
            </li>
            <li>
              <Link to="/corporate-info">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li>
              <Link to="/return-policy">Return Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/security">Security</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SOCIEL ICONS</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p>Email: support@gmail.com</p>
            <p>Phone: 1-800-123-4567</p>
            <p>Address: Raipur ,</p>
            <p>Test-Moninals Site</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="payment-methods">
            {/* <img src="/visa.png" alt="Visa" />
            <img src="/mastercard.png" alt="Mastercard" />
            <img src="/paypal.png" alt="PayPal" />
            <img src="/amex.png" alt="American Express" /> */}
          </div>
          <div className="copyright">
            <p style={{textAlign:'center'}}>
              &copy; {new Date().getFullYear()} ShopCart. All rights reserved.
            </p>
          </div>
          {/* <div className="app-downloads">
            <a href="#" className="app-button">
              <img src="/app-store.png" alt="Download on App Store" />
            </a>
            <a href="#" className="app-button">
              <img src="/play-store.png" alt="Get it on Play Store" />
            </a>
          </div> */}
        </div>
      </div>
      <Wp/>
    </footer>
  );
};

export default Footer;
