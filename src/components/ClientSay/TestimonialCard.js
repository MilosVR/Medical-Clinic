import React from "react";

const TestimonialCard = props => {
  return (
    <div className="client_say_slider_item">
      <img
        alt=""
        src={`/assets/testimonials/testimonial-${props.testimonialImage}.jpg`}
      />
      <div className="client_say_slider_item_info">
        <h3>{props.testimonialName}</h3>
        <span>Sale Manager</span>
        <p>{props.testimonialText}</p>
      </div>
      <div className="client_say_social_icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-google-plus-g"></i>
      </div>
    </div>
  );
};

export default TestimonialCard;
