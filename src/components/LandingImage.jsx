// src/components/LandingImage.js
import React from "react";
import "w3-css/w3.css";
import { Link } from "react-router-dom";

const LandingImage = () => {
  const ImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1.5), rgba(0, 0, 0, 0.8)), url("https://images.squarespace-cdn.com/content/v1/5e59534753bf613bfd6fed36/1601957618548-7GQL5TKNEA7IMZK0JKE6/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/annie-spratt-OIuCXxx08yg-unsplash.jpg")`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "20px",
    position: "relative",
  };

  const navStyle = {
    position: "absolute",
    top: "20px",
    display: "flex",
    width: "100%",
    padding: 16,
  };

  const ulStyle = {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
  };

  const liStyle = {
    display: "inline",
    marginRight: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="w3-container w3-mobile" style={ImageStyle}>
      <nav style={navStyle}>
        <p
          className="w3-mobile"
          style={{ flex: 1, fontSize: "3rem", marginTop: -10 }}
        >
          Shalom Foundation
        </p>
        <div className="w3-hide-small">
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link
                to="/"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style = { ...linkStyle, ...linkHoverStyle })
                }
                onMouseOut={(e) => (e.target.style = linkStyle)}
              >
                Home
              </Link>
            </li>
            <li style={liStyle}>
              <Link
                to="/about"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style = { ...linkStyle, ...linkHoverStyle })
                }
                onMouseOut={(e) => (e.target.style = linkStyle)}
              >
                About
              </Link>
            </li>
            <li style={liStyle}>
              <Link
                to="/community"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style = { ...linkStyle, ...linkHoverStyle })
                }
                onMouseOut={(e) => (e.target.style = linkStyle)}
              >
                Community
              </Link>
            </li>
            <li style={liStyle}>
              <Link
                to="/profile"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style = { ...linkStyle, ...linkHoverStyle })
                }
                onMouseOut={(e) => (e.target.style = linkStyle)}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LandingImage;
