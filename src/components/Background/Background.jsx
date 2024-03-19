import React from "react";
import video from "../../assets/video1.mp4";
import image1 from "../../assets/model1.jpg";
import image2 from "../../assets/model2.jpg";
import image3 from "../../assets/model3.jpg";
import "./Background.css";

const Background = ({ playStatus, homeCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (homeCount === 0) {
    return <img src={image1} className="background fade-in" />;
  } else if (homeCount === 1) {
    return <img src={image2} className="background fade-in" />;
  } else if (homeCount === 2) {
    return <img src={image3} className="background fade-in" />;
  }
};

export default Background;
