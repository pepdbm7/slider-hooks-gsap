import React, { useState, useEffect } from "react";
import Kid from "../img/kid.jpg";
import Rocks from "../img/rocks.jpg";
import Dogs from "../img/dogs.jpg";
import Sunset from "../img/sunset.jpg";
import { TweenMax, Back } from "gsap";

const Slider = () => {
  const [index, setIndex] = useState(1);

  const slides = [
    {
      quote:
        "I love you the more in that I believe you had liked me for my own sake and for nothing else",
      imgUrl: Kid
    },
    {
      quote:
        "But man is not made for defeat. A man can be destroyed but not defeated.",
      imgUrl: Rocks
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      imgUrl: Dogs
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      imgUrl: Sunset
    }
  ];

  const length = slides.length - 1;

  useEffect(() => animate(), []);

  const handleNext = () => {
    console.log("next");
    index === length ? setIndex(0) : setIndex(index + 1);
    animate();
  };

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
      0.2
    );
  };

  const handlePrevious = () => {
    console.log("previous");

    index === 0 ? setIndex(length) : setIndex(index - 1);
    animate();
  };

  const { quote, imgUrl } = slides[index];

  const currentSlide = i => {
    setIndex(i);
    animate();
  };

  return (
    <React.Fragment>
      {/* Slideshow container */}
      <div class="slideshow-container">
        {/* Full-width slides/quotes */}
        <div class="mySlides">
          <div className="slide">
            <div className="leftSide">
              <q>{quote}</q>
            </div>
            <div className="rightSide">
              <img src={`${imgUrl}`} alt="img1" />
            </div>
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
