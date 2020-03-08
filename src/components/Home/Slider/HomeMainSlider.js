import React, { useEffect, Children } from "react";
import "./HomeMainSlider.scss";

const HomeMainSlider = props => {
  useEffect(() => {
    const carousel = document.querySelector(".home_main_carousel");
    const slider = document.querySelector(".home_main_slider");
    const prev = document.querySelector(".home_main_slider_left_arrow_wraper");
    const next = document.querySelector(".home_main_slider_right_arrow_wraper");

    let direction = -1;

    const slideRight = () => {
      if (direction === 1) {
        direction = -1;
        slider.prepend(slider.lastElementChild);
      }
      direction = -1;
      carousel.style.justifyContent = "flex-start";
      slider.style.transform = "translate(-20%)";
    };
    setInterval(() => {
      slideRight();
    }, 3000);
    const slideLeft = () => {
      if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
      }
      direction = 1;
      carousel.style.justifyContent = "flex-end";
      slider.style.transform = "translate(20%)";
    };
    const transitionEndHandler = () => {
      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      } else {
        slider.appendChild(slider.firstElementChild);
      }

      slider.style.transition = "none";
      slider.style.transform = "translate(0)";
      setTimeout(() => {
        slider.style.transition = "all 500ms linear";
      }, 0);
    };

    next.addEventListener("click", slideRight);
    prev.addEventListener("click", slideLeft);
    carousel.addEventListener("transitionend", transitionEndHandler);

    return () => {
      carousel.removeEventListener("transitionend", transitionEndHandler);
      next.removeEventListener("click", slideRight);
      prev.removeEventListener("click", slideLeft);
    };
  });

  return (
    <div className="carousel_container">
      <div className="home_main_carousel">
        <div className="home_main_slider">
          <div className="home_slider_item">
            <div className="home_slider_item_info">
              <div className="home_slider_item_info_inner">
                <h3>We provide total</h3>
                <h1>HEALTH CARE SOLUTION</h1>
                <span></span>
                <p>
                  Every day we bring hope to milions of children in the wordld's{" "}
                </p>
              </div>
            </div>
            <img alt="" src="/assets/main-slider/main-slider-1.jpg" />
          </div>
          <div className="home_slider_item">
            <div className="home_slider_item_info">
              <div className="home_slider_item_info_inner">
                <h3>We provide total</h3>
                <h1>HEALTH CARE SOLUTION</h1>
                <span></span>
                <p>
                  Every day we bring hope to milions of children in the wordld's{" "}
                </p>
              </div>
            </div>
            <img alt="" src="/assets/main-slider/main-slider-2.jpg" />
          </div>
          <div className="home_slider_item">
            <div className="home_slider_item_info">
              <div className="home_slider_item_info_inner">
                <h3>We provide total</h3>
                <h1>HEALTH CARE SOLUTION</h1>
                <span></span>
                <p>
                  Every day we bring hope to milions of children in the wordld's{" "}
                </p>
              </div>
            </div>
            <img alt="" src="/assets/main-slider/main-slider-3.jpg" />
          </div>
          <div className="home_slider_item">
            <div className="home_slider_item_info">
              <div className="home_slider_item_info_inner">
                <h3>We provide total</h3>
                <h1>HEALTH CARE SOLUTION</h1>
                <span></span>
                <p>
                  Every day we bring hope to milions of children in the wordld's{" "}
                </p>
              </div>
            </div>
            <img alt="" src="/assets/main-slider/main-slider-4.jpg" />
          </div>
          <div className="home_slider_item">
            <div className="home_slider_item_info">
              <div className="home_slider_item_info_inner">
                <h3>We provide total</h3>
                <h1>HEALTH CARE SOLUTION</h1>
                <span></span>
                <p>
                  Every day we bring hope to milions of children in the wordld's{" "}
                </p>
              </div>
            </div>
            <img alt="" src="/assets/main-slider/main-slider-5.jpg" />
          </div>
        </div>
        <div className="home_main_slider_left_arrow_wraper">
          <div className="home_main_slider_arrow_left"></div>
        </div>
        <div className="home_main_slider_right_arrow_wraper">
          <div className="home_main_slider_arrow_right"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSlider;
