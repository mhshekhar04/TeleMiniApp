import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp"
import Events from "./components/Events";
import Verification from "./components/Verification";
import { Buffer } from "buffer";
import Virtue from "./components/Virtue";
import Regret from "./components/Regret";
import SendTokens from "./components/SendTokens";

// Polyfill Buffer for browser
if (!window.Buffer) {
  window.Buffer = Buffer;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Verification" element={<Verification/>} />
        <Route path="/Regret" element={<Regret/>} />
        <Route path="/Virtue" element={<Virtue/>} />
        <Route path="/SendTokens" element={<SendTokens/>} />



                                                         



      </Routes>
    </Router>
  );
}

export default App;
