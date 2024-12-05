import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import "./MainPage.css";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import { useActiveWallet } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { useLocation } from "react-router-dom";




export default function MainPage() {
  const account = useActiveAccount();
  const location = useLocation();
const { solanaWallet, evmWallet } = location.state || {
  solanaWallet: { address: "", privateKey: "" },
  evmWallet: { address: "", privateKey: "" },
};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const wallet = useActiveWallet();

  const validateLogin = () => {
    if (email === "test@gmail.com" && password === "test") {
      setError(""); // Clear the error message on successful login
      navigate("/MainPage"); // Redirect to MainPage
    } else {
      setError("Invalid email or password!"); // Set error message
    }
  };


// Update the `cards` array to include routes
const cards = [
  {
    title: "Virtue Balance:",
    balance: "$5,890.00",
    route: "/Virtue", // Route for Virtue.js
  },
  {
    title: "Rewards Balance:",
    balance: "$1,200.00",
    route: "/Regret", // Route for Regret.js
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
<p className="user-id">
  {account?.address ? shortenAddress(account.address) : "Connect your wallet"}
</p>  
  <h3 className="user-name">Ellen Halen</h3>
  </div>
  <button className="add-button">+</button>
</div>
{/* <div className="user-details">
  <p className="user-id">Solana Address: {solanaWallet.address}</p>
  <p className="user-id">EVM Address: {shortenAddress(evmWallet.address)}</p>
  <p className="user-id">Solana Private Key: {solanaWallet.privateKey.slice(0, 6)}...{solanaWallet.privateKey.slice(-6)}</p>
  <p className="user-id">EVM Private Key: {evmWallet.privateKey.slice(0, 6)}...{evmWallet.privateKey.slice(-6)}</p>
</div> */}



<div className="card-container">
  {cards.map((card, index) => (
    <div
      className="card"
      key={index}
      style={{
        background: [
          "linear-gradient(102deg, #23CF8E -10.42%, #00256C 108.32%)",
          "linear-gradient(102deg, #475569 -10.42%, #010101 108.32%)",
          "linear-gradient(102deg, #11CBDE -10.42%, #00256C 108.32%)",
          "linear-gradient(102deg, #75706D -10.42%, #292929 108.32%)",
        ][index],
        borderRadius: "20px",
      }}
    >
      {index < 2 ? (
        <Link to={card.route} className="card-link">
          <p className="card-title">{card.title}</p>
          <h1 className="card-balance">{card.balance}</h1>
        </Link>
      ) : (
        <>
          <p className="card-title">{card.title}</p>
          <h1 className="card-balance">{card.balance}</h1>
        </>
      )}
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
  <div
    className="footer-item active"
    onClick={() => navigate("/MainPage")}
  >
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
