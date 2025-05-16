import React, { useState } from "react";
import "./NavBar.css";
import { FaCog, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="navbar">
      <div className="nav-left-group">
        <h1 className="nav-logo">Clearerpay</h1>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <div className="nav-list">
            <a className="nav-link active">
              <CiGrid41 />
              Dashboard
            </a>
            <a>Wallet</a>
            <a>Merchants</a>
            <a>Transactions</a>
            <a>Beneficiaries</a>
          </div>
          <div className="nav-right-group">
            <div className="nav-right">
              <button className="account-btn">
                <FaUserCircle className="user-icon" />
                Personal account
                <IoIosArrowDown />
              </button>
              <button className="settings-btn">
                <FaCog className="settings-icon" />
                Settings
              </button>
            </div>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
