import React, { useState, useEffect } from "react";

import arrow_button from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";
import pause_icon from "../assets/pause_icon.png";
import Background from "../components/Background/Background";
import NavBar from "../components/Navbar/NavBar";
import "./Home.css";
import Footer from "../components/Footer/Footer";

const Home = ({ data, homeCount, setHomeCount, setPlayStatus, playStatus }) => {
  return (
    <div>
      <div className="home-text">
        <p> {data[homeCount].text1} </p>
        <p>{data[homeCount].text2}</p>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
