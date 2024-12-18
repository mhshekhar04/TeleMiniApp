import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SendTokens.css";
import rdmLogo from "../assets/logo.svg";
import { FaHome, FaBullseye, FaClipboardList, FaCog } from "react-icons/fa";

export default function SendTokens() {
  const navigate = useNavigate();

  const [selectedRecipient, setSelectedRecipient] = useState("To Self");
  const [selectedPurse, setSelectedPurse] = useState("To Reward");
  const [amount, setAmount] = useState("");

  return (
    <div className="send-tokens-page">
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

      {/* Send Tokens Section */}
      <section className="send-tokens-section">
        <h3>Send Tokens</h3>

        {/* Recipient Selection */}
        <div className="radio-group">
          <label>To</label>
          <div className="radio-options">
            {["To Self", "To Others", "To Charity"].map((recipient) => (
              <label key={recipient} className="radio-option">
                <input
                  type="radio"
                  value={recipient}
                  checked={selectedRecipient === recipient}
                  onChange={() => setSelectedRecipient(recipient)}
                />
                {recipient}
              </label>
            ))}
          </div>
        </div>

        {/* Purse Selection */}
        <div className="radio-group">
          <label>Select your purse</label>
          <div className="radio-options">
            {["To Reward", "To Remorse"].map((purse) => (
              <label key={purse} className="radio-option">
                <input
                  type="radio"
                  value={purse}
                  checked={selectedPurse === purse}
                  onChange={() => setSelectedPurse(purse)}
                />
                {purse}
              </label>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div className="amount-group">
          <label>Enter your amount</label>
          <input
            type="text"
            placeholder="Enter the RDM"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Send Button */}
        <button className="send-button">Send</button>
      </section>

      {/* Footer Navigation */}
      <footer className="footer-nav">
        <div className="footer-item" onClick={() => navigate("/MainPage")}>
          <FaHome size={20} />
          <span>Home</span>
        </div>
        <div className="footer-item " onClick={() => navigate("/Events")}>
          <FaBullseye size={20} />
          <span>Goals</span>
        </div>
        <div className="footer-item active" onClick={() => navigate("/SendTokens")}>
          <FaClipboardList size={20} />
          <span>History</span>
        </div>
        <div className="footer-item" onClick={() => navigate("/Settings")}>
          <FaCog size={20} />
          <span>Settings</span>
        </div>
      </footer>
    </div>
  );
}
