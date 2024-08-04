// src/components/Sidebar.js
import React from "react";
import "w3-css/w3.css";
import ProfilePage from "../pages/ProfilePage";
// import ProfilePage from "./ProfilePage"; // Adjust the path as necessary

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${
        isOpen ? "w3-show" : "w3-hide"
      }`}
      style={{ width: "300px", left: 0, top: 0 }}
    >
      <button
        onClick={toggleSidebar}
        className="w3-bar-item w3-button w3-large"
      >
        Close &times;
      </button>
      <ProfilePage />
    </div>
  );
};

export default Sidebar;
