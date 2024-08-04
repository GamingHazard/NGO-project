import React from "react";
import "w3-css/w3.css";

const Content = () => {
  return (
    <div className="w3-container">
      <h1 style={{ textAlign: "center" }}>
        Be The Change You Want In The World
      </h1>
      <p>
        Shalom Foundation welcomes individuals or organizations who want to join
        our effort to develop education in Africa.
      </p>
      <p>
        We need volunteers for various assignments. For a complete list of our
        open volunteer positions, please visit our{" "}
        <a href="/">opportunities page.</a>
      </p>
      <p>
        Alternatively, please email us at
        <a href="#"> contact@shalomfoundations.org</a> with a resume attached
        and a brief description of your skills and interests, and we will get
        back to you shortly with a potential position that might be a good fit.
      </p>
      <br />
      <p>
        Please note: Volunteer programs in Africa are not available through
        Shalom Foundation itself. However, our Ambassador in Africa program
        offers the opportunity for volunteering with one of our partnering
        organizations in Africa.{" "}
      </p>
    </div>
  );
};

export default Content;
