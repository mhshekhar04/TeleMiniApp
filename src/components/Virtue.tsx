import React, { useState,useEffect } from "react";
import { FaPaperPlane, FaQrcode, FaArrowDown } from "react-icons/fa";
import "./Virtue.css";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import TickAnimation from "../assets/tick.gif"; // Import the tick animation

const Virtue: React.FC = () => {
  const [selectedWallet, setSelectedWallet] = useState(""); // For wallet selection
  const [isFriendModalOpen, setIsFriendModalOpen] = useState(false); // To toggle modal visibility
  const [isAmountEnabled, setIsAmountEnabled] = useState(false); // To enable/disable amount input
  const [selectedFriend, setSelectedFriend] = useState(""); // To store selected friend
  const friends = ["yashasvi", "Rahul ", "Gill", "Virat Kohli", "Rishab Pant" , "Rohit Sharma"]; // Add more for testing
  const [isSending, setIsSending] = useState(false); // Loader state for the button
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Success modal state
  
  const navigate = useNavigate();
    
  const handleWalletChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wallet = e.target.value;
    setSelectedWallet(wallet);

    if (wallet === "wallet1" || wallet === "wallet2") {
      setIsFriendModalOpen(false);
      setIsAmountEnabled(true);
    } else {
      setIsFriendModalOpen(false);
      setIsAmountEnabled(false);
    }
  };

  const handleFriendSelect = (friend: string) => {
    setSelectedFriend(friend);
    setIsFriendModalOpen(false); // Close the modal after selection
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedWallet) {
      setIsSending(true); // Show loader on the button
      console.log("Wallet:", selectedWallet);
  
      // Simulate sending transaction
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
  
      setIsSending(false); // Hide loader
      setShowSuccessModal(true); // Show success modal
    }
  };

  // Updated Success Modal useEffect
useEffect(() => {
  if (showSuccessModal) {
    // Set a timeout to automatically close the modal after 3 seconds (adjust to match GIF duration)
    const timer = setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000); // Adjust time as needed for your GIF length (in milliseconds)

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }
}, [showSuccessModal]);

  

  return (
    <div className="virtue-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="user-info">
          <div className="user-details">
            <p className="user-id">34ftryui4gf.....</p>
            <h3 className="user-name">Ellen Halen</h3>
          </div>
          <button className="add-button">+</button>
        </div>

        {/* Virtue Balance Card */}
        <div className="balance-card">
          <p className="card-title">Virtue Balance:</p>
          <h1 className="card-balance">$5,890.00</h1>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button">
            <FaPaperPlane className="action-icon" />
            Send
          </button>
         
          <button className="action-button">
            <FaArrowDown className="action-icon" />
            Receive
          </button>
        </div>
      </div>

      {/* Send Form Section */}
      <div className="send-form">
        <h3 className="form-title">Send</h3>
        <form onSubmit={handleSubmit}>
          <select className="form-input" onChange={handleWalletChange}>
            <option value="">Where to send</option>
            <option value="wallet1">Reward Wallet</option>
            <option value="wallet2">Regret Wallet</option>
          </select>

          {/* Trigger Modal */}
          <button
            type="button"
            className="form-input modal-button"
            onClick={() => setIsFriendModalOpen(true)}
            disabled={!isAmountEnabled}
          >
            {selectedFriend || "Choose your friend"}
          </button>

          <input
            type="number"
            placeholder="Enter the amount"
            className="form-input"
            disabled={!isAmountEnabled}
          />
         <button
  type="submit"
  className="send-button"
  disabled={!isAmountEnabled ||  isSending} // Disable during sending
>
  {isSending ? "Sending..." : "Send"} {/* Show loader text */}
</button>

        </form>
      </div>

      {/* Friend List Modal */}
      {isFriendModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Choose your friend</h3>
            <div className="friend-list">
              {friends.map((friend, index) => (
                <div
                  key={index}
                  className="friend-item"
                  onClick={() => handleFriendSelect(friend)}
                >
                  <span className="friend-name">{friend}</span>
                  <FaPaperPlane className="friend-icon" />
                </div>
              ))}
            </div>
            <button
              className="close-modal"
              onClick={() => setIsFriendModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

{showSuccessModal && (
  <div className="success-modal">
    <div className="modal-content">
      <img src={TickAnimation} alt="Success" className="success-animation" />
      <p>Transaction Successful!</p>
      <button
        className="close-button"
        onClick={() => setShowSuccessModal(false)}
      >
        Close
      </button>
    </div>
  </div>
)}


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

export default Virtue;
