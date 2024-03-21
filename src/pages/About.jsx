import React from "react";
import NavBar from "../components/Navbar/NavBar";
import "./About.css";
import person1Img from "../assets/person-1.jpg";
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecena
              euismod, elit quis rutrum scelerisque, nibh tellus consectetur
              dui, id placerat nisl massa in arcu. Suspendisse nec sapien non
              quam rhoncus blandit. Curabitur in dui ut elit vehicula mattis et
              at lectus. Aliquam ut enim quam.
            </p>
          </div>
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
              I'm currently passing Ironhack's web development bootcamp,
              where I'm focusing on mastering React. This application is one of
              my projects during this intensive program. With a passion for
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
