import React from "react";
import "./Events.css";
import rdmLogo from "../assets/logo.svg";
import { FaChevronDown, FaHome, FaClipboardList, FaCog, FaBullseye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GoalsPage() {

  const navigate = useNavigate()
  const [expandedCard, setExpandedCard] = React.useState(null); // Track which card is expanded

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle the expanded state
  };

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
  <div className="header-search-bar">
    <input type="text" placeholder="Search" className="search-input" />
  </div>
  <div className="header-content">
    <div className="welcome-text">
      <h2>Welcome, Himanshu</h2>
      <p>US $ 25,890.00 &nbsp;&nbsp; RDM 234.98</p>
    </div>
    <button className="add-button">+</button>
  </div>
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
         <div className="goal-details">
           <div className="goal-icon">
             <span role="img" aria-label="steps">🚶‍♂️</span>
           </div>
           <p>{goal.title}</p>
           <div className="goal-expand" onClick={() => toggleCard(index)}>
             {expandedCard === index ? (
               <FaChevronDown style={{ transform: "rotate(180deg)" }} />
             ) : (
               <FaChevronDown />
             )}
           </div>
         </div>
       
         {expandedCard === index && (
           <div className="expanded-sections">
             <div className="expanded-section">Let's try harder</div>
             <div className="expanded-section">I have done it</div>
           </div>
         )}
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
