import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends, FaCalendarPlus, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { FaHome, FaBullseye, FaClipboardList, FaCog } from "react-icons/fa";
import rdmLogo from "../assets/logo.svg";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
     {/* Header Section */}
     <header className="header">
        <img src={rdmLogo} alt="RDM Logo" className="rdm-logo-left" />
        <div className="gradient-header">
          <div className="welcome-text">
            <h2>Welcome, Himanshu</h2>
            <p>US $ 25,890.00 &nbsp;&nbsp; RDM 234.98</p>
          </div>
          <button className="add-button">+</button>
        </div>
      </header>

      {/* Basic Settings Section */}
      <section className="basic-settings">
        <h3 className="settings-title">Basic Settings</h3>

        <div className="settings-option">
          <FaUserFriends className="settings-icon" />
          <p className="settings-text">Add Family & Friends</p>
        </div>
        <div className="settings-option">
          <FaCalendarPlus className="settings-icon" />
          <p className="settings-text">Add Events</p>
        </div>
        <div className="settings-option">
          <FaUserPlus className="settings-icon" />
          <p className="settings-text">Invite Friends</p>
        </div>
      </section>

      {/* Logout Section */}
      <div className="logout-section">
        <button className="logout-button" onClick={() => navigate("/")}>
          <FaSignOutAlt size={16} />
          Logout
        </button>
      </div>

      {/* Footer Navigation */}
      <footer className="footer-nav">
        <div className="footer-item" onClick={() => navigate("/MainPage")}>
          <FaHome size={20} />
          <span>Home</span>
        </div>
        <div className="footer-item  " onClick={() => navigate("/Events")}>
          <FaBullseye size={20} />
          <span>Goals</span>
        </div>
        <div className="footer-item" onClick={() => navigate("/SendTokens")}>
          <FaClipboardList size={20} />
          <span>History</span>
        </div>
        <div className="footer-item active" onClick={() => navigate("/Settings")}>
          <FaCog size={20} />
          <span>Settings</span>
        </div>
      </footer>
    </div>
  );
}
