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
        <div className="slideMainImg">
          <img src={oneProduct.image} alt="" />
        </div>
        <div className="slideDetailImg">
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
        <div className="slideDescription">
          <p>Description: <br /><strong>{oneProduct.description[currentSlide]}</strong></p><br />
          <p>Price: <strong>{oneProduct.price[currentSlide]}$</strong></p>
        </div>
      </div>
    </>
  );
};