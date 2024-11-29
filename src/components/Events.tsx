import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import "./Events.css";
import taskImage from "../assets/task.svg"; 

export default function Events() {
  const navigate = useNavigate();

  const goals = [
    {
      title: "5,000 steps",
      progress: "78%",
      image: taskImage, // Replace with actual icons or images
    },
    {
      title: "Eat Salad Twice",
      progress: "78%",
      image: taskImage,
    },
    {
      title: "30 minutes Walk",
      progress: "78%",
      image: taskImage,
    },
  ];

  return (
    <div className="events-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="user-info">
          <div className="user-details">
            <p className="user-id">34frtgyuihgfh...</p>
            <h3 className="user-name">Ellen Halen</h3>
          </div>
          <button className="add-button">+</button>
        </div>

        {/* Highlighted Task */}
        <div className="highlight-card">
          <p className="highlight-title">Your Today's task</p>
          <p className="highlight-subtitle">almost done</p>
          <div className="highlight-progress">
            <p>81%</p>
          </div>
          <button className="view-task-button">View task</button>
        </div>
      </div>

      {/* Goals Section */}
      <div className="goals-section">
        <div className="goals-header">
          <h3 className="goals-title">Goals</h3>
          <button className="see-all-button">See All</button>
        </div>

        {goals.map((goal, index) => (
        <div className="goal-item">
  <div className="goal-details">
    <img src={goal.image} alt="Goal Icon" className="goal-icon" />
    <div className="goal-title-buttons">
      <p className="goal-title">5,000 steps</p>
      <div className="goal-progress">
        <button className="approve-button">Approve</button>
        <button className="reject-button">Reject</button>
      </div>
    </div>
  </div>
</div>

        ))}
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <div
          className="footer-item"
          onClick={() => navigate("/MainPage")}
        >
          <FaHome className="footer-item-icon" />
          <p className="footer-item-text">Home</p>
        </div>
        <div
          className="footer-item active"
          onClick={() => navigate("/Events")}
        >
          <FaCalendarAlt className="footer-item-icon" />
          <p className="footer-item-text">Events</p>
        </div>
        <div
          className="footer-item"
          onClick={() => navigate("/Settings")}
        >
          <FaCog className="footer-item-icon" />
          <p className="footer-item-text">Settings</p>
        </div>
      </div>
    </div>
  );
}
