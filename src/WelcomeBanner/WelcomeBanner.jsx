import React from "react";
import "./WelcomeBanner.css";
import { FaBell } from "react-icons/fa";

const WelcomeBanner = () => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-message">Welcome Andy 👋</h2>
      <div className="otc-alert">
        <FaBell className="alert-icon" />
        <p>
          Your account has been setup for OTC trade, please{" "}
          <span className="contact-otc">Contact OTC</span> to transact
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
