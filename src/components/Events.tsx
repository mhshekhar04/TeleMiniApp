import React from "react";
import "./Events.css";
import rdmLogo from "../assets/logo.svg";
import { FaChevronDown ,FaHome,FaClipboardList,FaCog,FaBullseye} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GoalsPage() {

  const navigate = useNavigate()
  const goals = [
    { title: "Walk 5000 steps" },
    { title: "Walk 5000 steps" },
    { title: "Walk 5000 steps" },
    { title: "Walk 5000 steps" },
  ];

  return (
    <div className="goals-page">
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

      {/* Goals Section */}
      <section className="goals-section">
        <div className="goals-header">
          <h3>Goals</h3>
          <button className="see-all-button">See All</button>
        </div>

        <div className="goal-list">
          {goals.map((goal, index) => (
            <div className="goal-card" key={index}>
              <div className="goal-icon">
                <span role="img" aria-label="steps">
                  🚶‍♂️
                </span>
              </div>
              <div className="goal-details">
                <p>{goal.title}</p>
              </div>
              <div className="goal-expand">
                <FaChevronDown />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="footer-nav">
        <div className="footer-item" onClick={() => navigate("/MainPage")}>
          <FaHome size={20} />
          <span>Home</span>
        </div>
        <div className="footer-item active " onClick={() => navigate("/Events")}>
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
