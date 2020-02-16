import React from "react";
import "./MedicalInfo.scss";

const MedicalInfo = props => {
  return (
    <div className="medical_info">
      <div className="container">
        <div className="medical_info_boxes">
          <div className="medical_info_box">
            <img
              src="/assets/main-slider/main-slider-icon/icon_tree_white.png"
              alt=""
            />
            <div className="medical_info_box-description">
              <h4>DEPARTMENTS</h4>
              <p>The Backbone of our Clinic</p>
            </div>
            <button>More</button>
          </div>
          <div className="medical_info_box">
            <img
              src="/assets/main-slider/main-slider-icon/icon_med_book_white.png"
              alt=""
            />
            <div className="medical_info_box-description">
              <h4>MEDICAL SERVICES</h4>
              <p>A list of all available</p>
            </div>
            <button>More</button>
          </div>
          <div className="medical_info_box">
            <img
              src="/assets/main-slider/main-slider-icon/icon_doctor1.png"
              alt=""
            />
            <div className="medical_info_box-description">
              <h4>FIND A DOCTOR</h4>
              <p>All our staff by department</p>
            </div>
            <button>More</button>
          </div>
          <div className="medical_info_box">
            <img
              src="/assets/main-slider/main-slider-icon/icon_help_desk1.png"
              alt=""
            />
            <div className="medical_info_box-description">
              <h4>REQUEST AN APPOINTMENT</h4>
              <p>Call us or fill in a form</p>
            </div>
            <button>More</button>
          </div>
        </div>
        <div className="medical_info_description">
          <div className="medical_info_description_contact_phone">
            <i className="fas fa-mobile-alt fa-2x"></i>
            <div>
              <p>Give us a Call</p>
              <h3>1-888-123-4567</h3>
            </div>
          </div>
          <div className="medical_info_description_contact_email">
            <i className="fas fa-envelope fa-2x"></i>
            <div>
              <p>Send us a Message</p>
              <h3>medical-clinic@mail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;
