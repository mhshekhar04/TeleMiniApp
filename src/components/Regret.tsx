import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import "./Regret.css";
import TickAnimation from "../assets/tick.gif"; // Import the tick animation

const Regret: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Amount:", amount);
    console.log("Quote:", quote);
    alert("Charity amount submitted!");
  };

  return (
    <div className="reward-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="user-info">
          <div className="user-details">
            <p className="user-id">34ftryui4gf...</p>
            <h3 className="user-name">Ellen Halen</h3>
          </div>
          <button className="add-button">+</button>
        </div>

        {/* Regret Balance Card */}
        <div className="balance-card">
          <p className="card-title">Regret Balance:</p>
          <h1 className="card-balance">$5,890.00</h1>
        </div>
      </div>

      {/* Send to Charity Section */}
      <div className="send-charity">
        <h3 className="charity-title">Send to charity</h3>
        <p className="charity-description">Write a quote for charity</p>
        <form onSubmit={handleSubmit}>
          
          <input
            type="number"
            placeholder="Enter the amount"
            className="charity-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <div className="footer-item active" onClick={() => navigate("/MainPage")}>
          <FaHome className="footer-item-icon" />
          <p className="footer-item-text">Home</p>
        </div>
        <div className="footer-item" onClick={() => navigate("/Events")}>
          <FaCalendarAlt className="footer-item-icon" />
          <p className="footer-item-text">Events</p>
        </div>
        <div className="footer-item" onClick={() => navigate("/Settings")}>
          <FaCog className="footer-item-icon" />
          <p className="footer-item-text">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Regret;
