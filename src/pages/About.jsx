import React from "react";
import NavBar from "../components/Navbar/NavBar";
import "./About.css";
import person1Img from "../assets/person-1.jpg";
import person2Img from "../assets/person-2.png";

export const About = () => {
  return (
    <div className="about">
      <NavBar />
      <div className="profile">
        <div className="person1">
          <img src={person1Img} alt="First Person" />
          <div>
            <h3>Onur</h3>
          </div>
          <div className="about-onur">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod, elit quis rutrum scelerisque, nibh tellus consectetur
              dui, id placerat nisl massa in arcu. Suspendisse nec sapien non
              quam rhoncus blandit. Curabitur in dui ut elit vehicula mattis et
              at lectus. Aliquam ut enim quam. 
            </p>
          </div>
        </div>
        <div className="person2">
          <img src={person2Img} alt="Second Person" />
          <h3>Ali</h3>
          <div className="about-ali">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              euismod, elit quis rutrum scelerisque, nibh tellus consectetur
              dui, id placerat nisl massa in arcu. Suspendisse nec sapien non
              quam rhoncus blandit. Curabitur in dui ut elit vehicula mattis et
              at lectus. Aliquam ut enim quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
