import React, { useState, useEffect } from "react";

const Slider = () => {
  const [index, setIndex] = useState(1);

  const showSlides = n => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <React.Fragment>
      {/* Slideshow container */}
      <div class="slideshow-container">
        {/* Full-width slides/quotes */}
        <div class="mySlides">
          <div className="slide">
            <div className="leftSide">
              <q>
                I love you the more in that I believe you had liked me for my
                own sake and for nothing else
              </q>
            </div>
            <div className="rightSide">
              <img src="../img/kid.jpg" alt="img1" />
            </div>
          </div>

          <div className="slide">
            <div className="leftSide">
              <q>
                But man is not made for defeat. A man can be destroyed but not
                defeated.
              </q>
            </div>
            <div className="rightSide">
              <img src="../img/rocks.jpg" alt="img2" />
            </div>
          </div>

          <div className="slide">
            <div className="leftSide">
              <q>
                I have not failed. I've just found 10,000 ways that won't work.
              </q>
            </div>
            <div className="rightSide">
              <img src="../img/dogs.jpg" alt="img3" />
            </div>
          </div>

          <div className="slide">
            <div className="leftSide">
              <q>Be yourself; everyone else is already taken.</q>
            </div>
            <div className="rightSide">
              <img src="../img/sunset.jpg" alt="img4" />
            </div>
          </div>
        </div>

        {/* Next/prev buttons */}
        <p class="prev" onclick="plusSlides(-1)">
          &#10094;
        </p>
        <p class="next" onclick="plusSlides(1)">
          &#10095;
        </p>
      </div>

      {/* Dots/bullets/indicators */}
      <div class="dot-container">
        <span class="dot" onclick="currentSlide(1)" />
        <span class="dot" onclick="currentSlide(2)" />
        <span class="dot" onclick="currentSlide(3)" />
      </div>
    </React.Fragment>
  );
};

export default Slider;
