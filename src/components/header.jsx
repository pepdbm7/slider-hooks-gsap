import React, { useState } from "react";
import { TweenMax, Back } from "gsap";

const Slider = () => {
  const [index, setIndex] = useState(1);

  return (
    <React.Fragment>
      <div class="header-container">
        <div className="title-container">
          <h1>Scroll Down to see the magic</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
