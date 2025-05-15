import React from "react";
import "./NavBar.css";
import { FaArrowDown, FaCog, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-logo">Clearerpay</h1>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Wallet</li>
          <li>Merchants</li>
          <li>Transactions</li>
          <li>Beneficiaries</li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="account-btn">
          <FaUserCircle className="user-icon" />
          Personal account
          <IoIosArrowDown />
        </button>
        <button className="setting-btn">
          <FaCog className="setting-icon" />
          Settings
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
