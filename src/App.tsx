import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/MainPage" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;
