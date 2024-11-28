import React, { useState } from "react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { FaUserFriends, FaCalendarAlt, FaUserPlus } from "react-icons/fa";
import "./Settings.css";

// Create the thirdweb client
const client = createThirdwebClient({
  clientId: "YOUR_CLIENT_ID", // Replace with your actual Thirdweb client ID
});

// Define supported wallets
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

export default function Settings() {
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  // Handle wallet connection
  const handleConnect = (address: string) => {
    setConnectedAddress(address);
  };

  // Handle wallet disconnection
  const handleDisconnect = () => {
    setConnectedAddress(null);
  };

  return (
    <div className="settings-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="profile-section">
          <div className="profile-icon">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <h2 className="profile-name">Ellen Halen</h2>
            {connectedAddress ? (
              <p className="wallet-address">
                {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
              </p>
            ) : (
              <p className="wallet-address">Connect your wallet first</p>
            )}
          </div>
        </div>
      </div>

      {/* Connect Button */}
      <div className="connect-button-container">
        <ConnectButton
          client={client}
          wallets={wallets}
          onConnect={({ address }) => handleConnect(address)}
          onDisconnect={handleDisconnect}
          connectButton={{
            label: connectedAddress ? "Connected" : "Connect Wallet",
          }}
          connectModal={{
            size: "compact",
            title: "Connect Wallet",
            showThirdwebBranding: false,
          }}
        />
      </div>

      {/* Basic Settings Section */}
      <div className="basic-settings">
        <h3 className="settings-title">Basic Settings</h3>
        <div className="settings-option">
          <FaUserFriends className="settings-icon" />
          <p className="settings-text">Add Family & Friends</p>
          <span className="settings-arrow">›</span>
        </div>
        <div className="settings-option">
          <FaCalendarAlt className="settings-icon" />
          <p className="settings-text">Add Events</p>
          <span className="settings-arrow">›</span>
        </div>
        <div className="settings-option">
          <FaUserPlus className="settings-icon" />
          <p className="settings-text">Invite Friends</p>
          <span className="settings-arrow">›</span>
        </div>
      </div>

      {/* Logout Button */}
      <div className="logout-button-container">
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}
