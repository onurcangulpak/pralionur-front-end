import React, { useState } from "react";
import "./Home.css";
import arrow_button from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";

import pause_icon from "../assets/pause_icon.png";
export const Home = ({
  homeData,
  setHomeCount,
  homeCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="home">
      <div className="home-text">
        <p> {homeData.text1} </p>
        <p>{homeData.text2}</p>
      </div>

      <div className="home-explore">
        <p> Explore the features</p>
        <img src={arrow_button} alt="" />
      </div>
      <div className="home-dot-play">
        <ul className="home-dots">
          <li
            onClick={() => setHomeCount(0)}
            className={homeCount === 0 ? "home-dot orange" : "home-dot"}
          ></li>
          <li
            onClick={() => setHomeCount(1)}
            className={homeCount === 1 ? "home-dot orange" : "home-dot"}
          ></li>
          <li
            onClick={() => setHomeCount(2)}
            className={homeCount === 2 ? "home-dot orange" : "home-dot"}
          ></li>
        </ul>
        <div className="home-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};
