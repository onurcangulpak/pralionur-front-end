import React, { useState, useEffect } from "react";
import "./Home.css";
import arrow_button from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";
import pause_icon from "../assets/pause_icon.png";
import Background from "../components/Background/Background";
import NavBar from "../components/Navbar/NavBar";

const Home = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const data = [
    { text1: "Stay Trendy", text2: "Discover the latest styles." },
    { text1: "Great Deals", text2: "Find affordable fashion." },
    { text1: "Express Yourself", text2: "Shop your unique style." },
  ];
  const [homeCount, setHomeCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <Background playStatus={playStatus} homeCount={homeCount} />
      <div className={`container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
      </div>
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
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
