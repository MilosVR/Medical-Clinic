import React from "react";
import "./WhyChooseUs.scss";

const WhyChooseUs = props => {
  return (
    <div className="why_choose_us">
      <div className="container">
        <img alt="" src="/assets/why-choose-us.png" />

        <div className="why_choose_use_item_wraper">
          <h1>Why Choose Us</h1>
          <p>
            Lorem ipsum dolor sit amet,elit. Cum sit ullam. Every day we bring
            hope to millions of children in the world's
          </p>
          <div className="why_choose_use_item_grid">
            <div className="why_choose-use_item">
              <i className="fas fa-ambulance"></i>
              <div>
                <h4>Emergency Care</h4>
                <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam. </p>
              </div>
            </div>
            <div className="why_choose-use_item">
              <i className="fas fa-user-md"></i>
              <div>
                <h4>Emergency Care</h4>
                <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam. </p>
              </div>
            </div>
            <div className="why_choose-use_item">
              <i className="fas fa-syringe"></i>
              <div>
                <h4>Emergency Care</h4>
                <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam. </p>
              </div>
            </div>
            <div className="why_choose-use_item">
              <i className="fas fa-vial"></i>
              <div>
                <h4>Emergency Care</h4>
                <p>Lorem ipsum dolor sit amet,elit. Cum sit ullam. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
