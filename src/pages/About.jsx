import React from "react";
import NavBar from "../components/Navbar/NavBar";
import "./About.css";
import person1Img from "../assets/person-1.png";
import person2Img from "../assets/person-2.jpg";

export const About = () => {
  return (
    <div className="app-container">
      <div className="card-container">
        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img src={person1Img} alt="profile1" />
            </div>
          </div>

          <div className="lower-container">
            <h3>Onurcan Gülpak</h3>
            <h4>Web Developer</h4>
            <p>
              Hey! 👋 I'm Onurcan GÜLPAK, a budding coder at IronHack.
              Passionate about Web Devoloping , I'm eager to tackle new projects
              and share my journey with you. Stay tuned as I showcase my latest
              projects and discoveries!
            </p>
          </div>

          <div className="social-media"></div>
        </div>

        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img src={person2Img} alt="profile2" />
            </div>
          </div>

          <div className="lower-container">
            <h3>Aliakbar Torbati</h3>
            <h4>Web Developer</h4>
            <p>
              I'm currently passing Ironhack's web development bootcamp, where
              I'm focusing on mastering React. This application is one of my
              projects during this intensive program. With a passion for
              creating user-friendly interfaces, I'm dedicated to advancing my
              skills and utilizing this project as a stepping stone towards
              achieving my career goals in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
