import React, { useEffect } from "react";
import "./ClientSay.scss";
import TestimonialCard from "./TestimonialCard";

const ClientSay = props => {
  useEffect(() => {
    const next_btn = document.querySelector(".testimonial_slider_right");
    const prev_btn = document.querySelector(".testimonial_slider_left");
    const sliderTestimonial = document.querySelector(".testimonials");
    const dots = document.querySelector(".dots");
    const large_screen_dots = document.querySelector(".large_screen_dots");

    Array.from(sliderTestimonial.children).map(item => {
      let span = document.createElement("SPAN");
      return dots.appendChild(span);
    });

    let index = 0;

    dots.children[0].classList.add("active_dot");

    const dotsSlide = (e, dotIndex) => {
      const activeDot = document.querySelector(".active_dot");
      index = dotIndex;
      if (!e.target.classList.contains("active_dot")) {
        e.target.classList.add("active_dot");
        activeDot.classList.remove("active_dot");
      } else {
        return null;
      }
      sliderTestimonial.style.transform = `translate(-${index * 20}%)`;
    };

    Array.from(dots.children).map((item, index) => {
      item.addEventListener("click", e => dotsSlide(e, index));
    });

    const resetIndex = () => {
      if (window.innerWidth < 1280) {
      }
    };
    window.addEventListener("resize", resetIndex);

    const nextSlideTestimonial = () => {
      if (sliderTestimonial.getBoundingClientRect().width > 1680) {
        index = index < 5 ? index + 1 : 4;
      } else {
        index = index < 2 ? index + 1 : 2;
      }

      const activeDot = document.querySelector(".active_dot");
      sliderTestimonial.style.transform = `translate(-${index * 20}%)`;
      activeDot.classList.remove("active_dot");
      dots.children[index].classList.add("active_dot");
    };

    const prevSlideTestimonial = () => {
      const activeDot = document.querySelector(".active_dot");
      index = index > 0 ? index - 1 : 0;
      sliderTestimonial.style.transform = `translate(-${index * 20}%)`;
      activeDot.classList.remove("active_dot");
      dots.children[index].classList.add("active_dot");
    };

    next_btn.addEventListener("click", nextSlideTestimonial);
    prev_btn.addEventListener("click", prevSlideTestimonial);
    return () => {
      next_btn.removeEventListener("click", nextSlideTestimonial);
      prev_btn.removeEventListener("click", prevSlideTestimonial);
      Array.from(dots.children).map(item =>
        item.addEventListener("click", dotsSlide)
      );
    };
  });

  return (
    <div className="client_say">
      <div className="container">
        <div className="client_say_headline">
          <h1>
            What are Clients <span>Say</span>
          </h1>
        </div>
        <div className="client_say_slider_container">
          <div className="testimonial_slider_left">
            <i className="fas fa-arrow-circle-left"></i>
          </div>
          <div className="testimonial_slider_right">
            <i className="fas fa-arrow-circle-right"></i>
          </div>
          <div className="dots"></div>
          <div className="client_say_slider_wraper">
            <div className="testimonials">
              <TestimonialCard
                testimonialImage={1}
                testimonialName={"Lara Chang"}
                testimonialText={
                  "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
                }
              />
              <TestimonialCard
                testimonialText={
                  "Thanks to the best pediatricians in your center. Every time I address and receive a high level professionalism! I will recommend you to all my friends and acquaintances. The services themselves were rendered qualitatively."
                }
                testimonialImage={2}
                testimonialName={"John Doe"}
              />
              <TestimonialCard
                testimonialImage={3}
                testimonialName={"Lara Chang"}
                testimonialText={
                  "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
                }
              />
              <TestimonialCard
                testimonialImage={4}
                testimonialName={"Lara Chang"}
                testimonialText={
                  "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
                }
              />
              <TestimonialCard
                testimonialImage={4}
                testimonialName={"Lara Chang"}
                testimonialText={
                  "High level of equipment and doctors. There are no queus and cheapprices. There are interesting complex progrms for exmination of thewhole organism. Very good medical center, i recommend."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
