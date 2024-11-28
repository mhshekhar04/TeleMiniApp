import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function MainPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateLogin = () => {
    if (email === "test@gmail.com" && password === "test") {
      setError(""); // Clear the error message on successful login
      navigate("/MainPage"); // Redirect to MainPage
    } else {
      setError("Invalid email or password!"); // Set error message
    }
  };

  const cards = [
    {
      title: "Virtue Balance: ",
      balance: "$5,890.00",
     
    },
    {
      title: "Rewards Balance:",
      balance: "$1,200.00",
     
    },
    {
      title: "Travel Funds:",
      balance: "$3,456.00",
     
    },
    {
      title: "Shopping Credit:",
      balance: "$8,000.00",
    
    },
  ];

  return (
    <div className="login-page">
      {/* Header Section */}
      <div className="header-section">
      <div className="user-info">
  <div className="user-details">
    <p className="user-id">34frtgyuihgfh...</p>
    <h3 className="user-name">Ellen Halen</h3>
  </div>
  <button className="add-button">+</button>
</div>


        {/* Horizontal Cards */}
        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <p className="card-title">{card.title}</p>
              <h1 className="card-balance">{card.balance}</h1>
              
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="transactions-section">
        <div className="transactions-header">
          <h3 className="transactions-title">Recent Transactions</h3>
          <button className="see-all-button">See All</button>
        </div>

        {/* Transactions List */}
        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🚶‍♂️</span>
            <div>
              <p className="transaction-title">Walk not completed</p>
              <p className="transaction-date">Dec 15, 2023</p>
            </div>
          </div>
          <p className="transaction-amount negative">- £199</p>
        </div>

        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🍔</span>
            <div>
              <p className="transaction-title">Eated Burger</p>
              <p className="transaction-date">Jan 01, 2023</p>
            </div>
          </div>
          <p className="transaction-amount negative">- £649</p>
        </div>
        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🍔</span>
            <div>
              <p className="transaction-title">Eated Burger</p>
              <p className="transaction-date">Jan 01, 2023</p>
            </div>
          </div>
          <p className="transaction-amount negative">- £649</p>
        </div>
        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🍔</span>
            <div>
              <p className="transaction-title">Eated Burger</p>
              <p className="transaction-date">Jan 01, 2023</p>
            </div>
          </div>
          <p className="transaction-amount negative">- £649</p>
        </div>
        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🍔</span>
            <div>
              <p className="transaction-title">Eated Burger</p>
              <p className="transaction-date">Jan 01, 2023</p>
            </div>
          </div>
          <p className="transaction-amount negative">- £649</p>
        </div>

        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-icon">🏋️‍♂️</span>
            <div>
              <p className="transaction-title">Gym for 2 hours</p>
              <p className="transaction-date">Feb 12, 2024</p>
            </div>
          </div>
          <p className="transaction-amount positive">+ £1445.90</p>
        </div>
      </div>
      <div className="footer-nav">
  <div className="footer-item" onClick={() => navigate("/MainPage")}>
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
}
