import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./components/Settings";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp"
import Events from "./components/Events";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Events" element={<Events/>} />




      </Routes>
    </Router>
  );
}

export default App;
