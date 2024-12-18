import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import rdmLogo from "../assets/logo.svg";
import virtueIcon from "../assets/virtue-purse.svg";
import reserveIcon from "../assets/reserve-purse.svg";
import rewardIcon from "../assets/reward-purse.svg";
import remorseIcon from "../assets/remorse-purse.svg";
import charityIcon from "../assets/charity.svg";
import consciousIcon from "../assets/conscious-living.svg";
import heartIcon from "../assets/heart-network.svg";
import { FaHome, FaClipboardList,FaBullseye, FaCog } from "react-icons/fa";

export default function MainPage() {
  const navigate = useNavigate();
  const [activeFocus, setActiveFocus] = React.useState(null);

  const purses = [
    { title: "Virtue Purse", balance: "RDM 234.87", icon: virtueIcon },
    { title: "Reserve Purse", balance: "RDM 23.87", icon: reserveIcon },
    { title: "Reward Purse", balance: "RDM 78.87", icon: rewardIcon },
    { title: "Remorse Purse", balance: "RDM 364.87", icon: remorseIcon },
  ];

  const focusItems = [
    { title: "Trickle Charity", icon: charityIcon },
    { title: "Conscious Living", icon: consciousIcon },
    { title: "Heart Network", icon: heartIcon },
  ];

  const transactions = [
    { title: "Walk 5000 steps", date: "17th February, 2023", amount: "₹39.00", status: "Not completed" },
  ];

  return (
    <div className="main-page">
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


      {/* Balance Section */}
      <section className="balance-section">
        <h3>Your Balance</h3>
        <div className="purse-container">
          {purses.map((purse, index) => (
            <div className="purse-card" key={index}>
              <img src={purse.icon} alt={purse.title} />
              <h4>{purse.title}</h4>
              <p>{purse.balance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Section */}
      <section className="focus-section">
        <h3>My Focus</h3>
        <div className="focus-container">

{focusItems.map((item, index) => (
  <div
    className={`focus-item ${activeFocus === index ? "active" : ""}`}
    key={index}
    onClick={() => setActiveFocus(index)} 
  >
    <img src={item.icon} alt={item.title} />
    <p>{item.title}</p>
  </div>
))}

        </div>
      </section>

      {/* Transactions Section */}
      <section className="transactions-section">
        <h3>Recent Transactions</h3>
        {transactions.map((tx, index) => (
          <div className="transaction-card" key={index}>
            <div className="transaction-details">
              <p>{tx.title}</p>
              <span>{tx.date}</span>
            </div>
            <p className="transaction-amount">{tx.amount}</p>
          </div>
        ))}
      </section>

       {/* Footer Navigation */}
       <footer className="footer-nav">
        <div className="footer-item active" onClick={() => navigate("/MainPage")}>
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
        <div className="footer-item" onClick={() => navigate("/Settings")}>
          <FaCog size={20} />
          <span>Settings</span>
        </div>
      </footer>
    </div>
  );
}
