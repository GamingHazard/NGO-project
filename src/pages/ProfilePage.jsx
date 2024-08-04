// src/components/ProfilePage.js
import React from "react";
import "w3-css/w3.css";
import ProfilePic from "../profile.jpg"; // Adjust the path as necessary

const ProfilePage = () => {
  return (
    <div
      className="w3-container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        border: "1px solid black",
        width: 300,
        height: 500,
      }}
    >
      <div className="w3-center">
        <img
          style={{ width: 200, height: 200 }}
          src={ProfilePic}
          alt="Profile"
        />
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>Name of User</p>

      <div
        style={{
          display: "flex",
          padding: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: 150 }}
          className="w3-button w3-ripple w3-padding w3-grey w3-round-medium"
        >
          <p>Edit</p>
        </div>
        <div
          style={{ width: 150 }}
          className="w3-button w3-ripple w3-padding w3-grey w3-round-medium"
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
