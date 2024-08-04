// src/pages/HomePage.js
import React, { useState } from "react";
import "w3-css/w3.css";
import LandingImage from "../components/LandingImage";
import Content from "../components/Content";
import YoutubeVideo from "../components/YouTubeVideo";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Sidebar from "../components/SideBar";
// import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="w3-mobile"
      style={{ flex: 1, backgroundColor: "whitesmoke" }}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <nav className="w3-bar w3-light-grey">
        <button
          onClick={toggleSidebar}
          className="w3-bar-item w3-button w3-right"
        >
          Profile
        </button>
      </nav> */}
      <LandingImage Prof={toggleSidebar} />
      <Content />
      <YoutubeVideo />
      <div style={{ display: "flex", padding: 16 }}>
        <h2 className="w3-mobile" style={{ flex: 1 }}>
          Organization Achievements
        </h2>
        <div
          className="w3-button w3-hide-small w3-blue w3-round-small"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p> More</p>
        </div>
      </div>
      <Achievements />
      <div
        className="w3-button w3-hide-large w3-mobile w3-margin w3-blue w3-round-small"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>More</p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
