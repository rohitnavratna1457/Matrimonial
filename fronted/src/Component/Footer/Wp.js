import React from 'react';
import '../Footer/Wp.css'; // Ensure the correct path to your CSS file
import img from '../Footer/wpimg.webp';

const Wp = () => {
  return (
    <div className="whatsapp-container">
      <a
        href="https://wa.me/919981300267" // Corrected WhatsApp number format
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt="WhatsApp" className="whatsapp-icon" />
        <div className="notification-icon"></div> 
      </a>
    </div>
  );
};

export default Wp;
