import React, { useState } from "react";
import "./SlideShow.css";

export const SlideShow = ({ oneProduct }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % oneProduct.detailImg.length
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? oneProduct.detailImg.length - 1 : prevSlide - 1
    );
  };
  return (
    <>
      <div className="slideshow-container">
        <button className="prev" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        {/* <div className="slide"> */}
        <img
          src={oneProduct.detailImg[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
        {/* </div> */}
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
};
