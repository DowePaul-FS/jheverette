import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;