import React from "react";
import "w3-css/w3.css";

const Achievements = () => {
  return (
    <div
      className=" w3-container w3-cell-row w3-mobile"
      style={{
        width: "100%",
        height: "auto",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        className="w3-quarter w3-animate-bottom w3-mobile w3-white w3-margin  w3-card w3-round-medium "
        style={{ width: 400, height: "100%", marginLeft: 10, marginRight: 10 }}
      >
        <img
          className="w3-mobile w3-image"
          style={{
            objectFit: "cover",
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            width: "100%",
          }}
          src="https://www.crs.org/sites/default/files/crs-files/uganda_school_house.jpg"
        />
        <p style={{ padding: "10px", width: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          perferendis velit distinctio deleniti tenetur eaque beatae amet quas?
          Temporibus nesciunt maiores officiis earum ipsam vero architecto
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
        </p>
      </div>
      <div
        className="w3-quarter w3-animate-bottom w3-mobile w3-white w3-margin  w3-card w3-round-medium "
        style={{ width: 400, height: "100%", marginLeft: 10, marginRight: 10 }}
      >
        <img
          className="w3-mobile w3-image"
          style={{
            objectFit: "cover",
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            width: "100%",
          }}
          src="https://www.crs.org/sites/default/files/crs-files/ugnada_student_img_1236_1.jpg"
        />
        <p style={{ padding: "10px", width: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          perferendis velit distinctio deleniti tenetur eaque beatae amet quas?
          Temporibus nesciunt maiores officiis earum ipsam vero architecto
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
        </p>
      </div>
      <div
        className="w3-quarter w3-animate-bottom w3-mobile w3-white w3-margin  w3-card w3-round-medium "
        style={{ width: 400, height: "100%", marginLeft: 10, marginRight: 10 }}
      >
        <img
          className="w3-mobile w3-image"
          style={{
            objectFit: "cover",
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            width: "100%",
          }}
          src="https://newvision-media.s3.amazonaws.com/cms/efa6825c-7901-481a-889c-cd4aeae56021.jpg"
        />
        <p style={{ padding: "10px", width: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          perferendis velit distinctio deleniti tenetur eaque beatae amet quas?
          Temporibus nesciunt maiores officiis earum ipsam vero architecto
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
          consequatur tempore error. Odio. Quae, dolorem! Quisquam consequatur
        </p>
      </div>
    </div>
  );
};

export default Achievements;
