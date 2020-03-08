import React from "react";
import "./MedicalServices.scss";

const MedicalServices = props => {
  return (
    <div className="medical_services">
      <div className="container">
        <div className="medical_services_wraper">
          <div className="medical_services_departments">
            <h3>Departments</h3>
            <ul>
              <li>Outpatient Surgery</li>
              <li>Cardiac Clinicy</li>
              <li>Ophthalmology Clinic</li>
              <li>Gynaecological Clinic</li>
              <li>Outpatient Rehabilitation</li>
              <li>Laryngological Clinic</li>
              <li>Pediatric Clinic</li>
            </ul>
          </div>
          <div className="our_services_slider_wraper">
            <div className="slider_header">
              <div>
                <p>Inovation</p>
                <h3>Our Services</h3>
              </div>
              <div className="service_slider_navigation">
                <i className="far fa-caret-square-left"></i>
                <i className="far fa-caret-square-right"></i>
              </div>
            </div>
            <div className="our-service-slider">
              <div className="our_services_slider_card">
                <div className="our_services_slider_card_image">
                  <i className="fas fa-medkit"></i>
                  <img
                    src="/assets/main-slider/service-slider/service-img-1.jpg"
                    alt=""
                  />
                </div>
                <h4>Pediatric</h4>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida.
                </p>
              </div>
              <div className="our_services_slider_card">
                <div className="our_services_slider_card_image">
                  <i className="fas fa-medkit"></i>
                  <img
                    src="/assets/main-slider/service-slider/service-img-2.jpg"
                    alt=""
                  />
                </div>
                <h4>Pediatric</h4>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida.
                </p>
              </div>
              <div className="our_services_slider_card">
                <div className="our_services_slider_card_image">
                  <i className="fas fa-medkit"></i>
                  <img
                    src="/assets/main-slider/service-slider/service-img-3.jpg"
                    alt=""
                  />
                </div>
                <h4>Pediatric</h4>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque fermentum massa vel enim feugiat gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
