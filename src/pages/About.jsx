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
              at lectus. Aliquam ut enim quam. Vestibulum in turpis et eros
              consequat sagittis. Suspendisse potenti. Nulla efficitur eu ipsum
              ut cursus. Aliquam venenatis aliquam ante non malesuada. Cras
              ullamcorper congue porta. Nam id neque vehicula, ornare magna ac,
              dictum nisl. Pellentesque dapibus diam vitae tellus euismod, et
              pretium leo molestie. Nunc et imperdiet nibh. Suspendisse tellus
              arcu, finibus eu facilisis sit amet, fermentum ut dolor. Aliquam
              egestas bibendum augue, sit amet facilisis sem varius eget. Sed eu
              aliquet diam, non eleifend sapien. Etiam ut massa elementum dui
              ultrices molestie.
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
              at lectus. Aliquam ut enim quam. Vestibulum in turpis et eros
              consequat sagittis. Suspendisse potenti. Nulla efficitur eu ipsum
              ut cursus. Aliquam venenatis aliquam ante non malesuada. Cras
              ullamcorper congue porta. Nam id neque vehicula, ornare magna ac,
              dictum nisl. Pellentesque dapibus diam vitae tellus euismod, et
              pretium leo molestie. Nunc et imperdiet nibh. Suspendisse tellus
              arcu, finibus eu facilisis sit amet, fermentum ut dolor. Aliquam
              egestas bibendum augue, sit amet facilisis sem varius eget. Sed eu
              aliquet diam, non eleifend sapien. Etiam ut massa elementum dui
              ultrices molestie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
