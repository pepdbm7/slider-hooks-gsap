import React, { useState, useEffect } from "react";
import { TweenMax, Back } from "gsap";
import slides from "../slides";

import useIntersectionObserver from "./use_intersection_observer";

const Slider = () => {
  let [index, setIndex] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({});
  const length = slides.length - 1;

  const animate = () => {
    TweenMax.from("img", 0.5, {
      scale: 0.5,
      opacity: 0,
      y: -150,
      ease: Back.easeOut,
      delay: 0.4
    });
    TweenMax.from("q", 1, {
      opacity: 0,
      x: -150,
      ease: Back.easeInOut,
      delay: 0.4
    });
    TweenMax.staggerFrom(
      ".dot",
      0,
      { scale: 0.5, opacity: 0, delay: 1.3, ease: Back.easeOut },
      0.1
    );
  };

  //activate effects when component is visible in screen:
  if (isVisible) {
    console.log(isVisible);
    animate();
  }

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  const currentSlide = i => setIndex(i);

  const { quote, imgUrl } = slides[index];
  return (
    <React.Fragment>
      {/* Slideshow container */}
      <div ref={ref} class="slideshow-container">
        {/* Full-width slides/quotes */}
        <div className="slide">
          <div className="leftSide">
            <q>{quote}</q>
          </div>
          <div className="rightSide">
            <img src={`${imgUrl}`} alt="img1" />
          </div>
        </div>

        {/* Next/prev buttons */}
        <p class="prev" onClick={() => handlePrevious()}>
          &#10094;
        </p>
        <p class="next" onClick={() => handleNext()}>
          &#10095;
        </p>
      </div>

      {/* Dots/bullets/indicators */}
      <div class="dot-container">
        {slides.map((_, i) => {
          if (i === index) {
            return <span class="dot active" onClick={() => currentSlide(i)} />;
          }
          return <span class="dot" onClick={() => currentSlide(i)} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Slider;
