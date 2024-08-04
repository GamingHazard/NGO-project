import React from "react";
import "w3-css/w3.css";

const YoutubeVideo = () => {
  return (
    <div className="w3-center w3-container w3-round-medium">
      <div className="youtube__container">
        <iframe
          className="w3-round-small"
          width="100%"
          height="500"
          title="Youtube video"
          src="https://www.youtube.com/embed/Y8NAffsYvhc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
