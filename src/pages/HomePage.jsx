import React from "react";
import "w3-css/w3.css";
import LandingImage from "../components/LandingImage";
import Content from "../components/Content";
import YoutubeVideo from "../components/YouTubeVideo";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div
      className=" w3-mobile"
      style={{ flex: 1, backgroundColor: "whitesmoke" }}
    >
      <LandingImage />
      <Content />
      <YoutubeVideo />
      <div style={{ display: "flex", padding: 16 }}>
        <h2 className="w3-mobile" style={{ flex: 1 }}>
          Organization Achievements
        </h2>
        <div
          className="w3-button w3-hide-small  w3-blue w3-round-small"
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
        className="w3-button w3-hide-large w3-mobile w3-margin  w3-blue w3-round-small"
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
