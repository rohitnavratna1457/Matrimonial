import React from "react";
import "../Menubar_Page/Menubar.css"; // Ensure the CSS file path is correct.
import img from "../Menubar_Page/logo.jpg"; // Ensure the path to your logo is correct.
import Slider from "./Slider"; // Import Slider component
import { Link } from "react-router-dom"; // Import Link component for React Router navigation

const Menubar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={img} alt="Logo" />
          </div>

          <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/About" >About</Link>
            <Link to="/service" >Service</Link>
            <Link to="/event" >Event</Link>
            <Link to="/contact" >Contact</Link>
          </div>

          <div className="auth-buttons">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/Register">
              <button>Signup</button>
            </Link>
          </div>
        </nav>
      </header>

      <Slider /> {/* You can also apply a slider component below the Menubar */}
    </>
  );
};

export default Menubar;
