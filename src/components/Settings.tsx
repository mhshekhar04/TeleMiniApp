import React from "react";
import { useNavigate } from "react-router-dom";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import profileImage from "../assets/profile.svg";
import "./Settings.css";
import { useActiveWallet , useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";


const client = createThirdwebClient({
  clientId: "c01e9878d45ba0f45abaf91b999e034f", // Replace with your Thirdweb client ID
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

export default function Settings() {
  const navigate = useNavigate();
  const wallet = useActiveWallet();
  const account = useActiveAccount();

  return (
    <div className="settings-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h2 className="profile-name">Ellen Halen</h2>
          <p className="wallet-address">
  {account ? shortenAddress(account.address) : "Connect your wallet first"}
</p>
      </div>
      </div>

      {/* Wallet Connect Section */}
      <div className="connect-wallet-container">
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={darkTheme({
            colors: { danger: "hsl(358, 74%, 42%)" },
          })}
          connectModal={{
            size: "compact",
            showThirdwebBranding: false,
          }}
        />
      </div>

      {/* Basic Settings Section */}
      <div className="basic-settings">
        <h3 className="settings-title">Basic Settings</h3>
        <div className="settings-option">
          <FaHome className="settings-icon" />
          <p className="settings-text">Add Family & Friends</p>
        </div>
        <div className="settings-option">
          <FaCalendarAlt className="settings-icon" />
          <p className="settings-text">Add Events</p>
        </div>
        <div className="settings-option">
          <FaCog className="settings-icon" />
          <p className="settings-text">Preferences</p>
        </div>
        <div className="settings-option">
          <FaCog className="settings-icon" />
          <p className="settings-text"
            onClick={() => navigate("/")}>Logout</p>
        
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-nav">
        <div
          className="footer-item"
          onClick={() => navigate("/MainPage")}
        >
          <FaHome className="footer-item-icon" />
          <p className="footer-item-text">Home</p>
        </div>
        <div
          className="footer-item"
          onClick={() => navigate("/Events")}
        >
          <FaCalendarAlt className="footer-item-icon" />
          <p className="footer-item-text">Events</p>
        </div>
        <div
          className="footer-item active"
          onClick={() => navigate("/Settings")}
        >
          <FaCog className="footer-item-icon" />
          <p className="footer-item-text">Settings</p>
        </div>
      </div>
    </div>
  );
}
