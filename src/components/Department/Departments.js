import React from "react";
import Footer from "../Footer/Footer";
import "./Departments.scss";
import Department from "./Department";

const Departments = props => {
  return (
    <div className="departments">
      <div className="departments_header_wraper">
        <div className="departments_header">
          <div className="departments_headline">
            <div className="container">
              <div className="departments_headline_inner">
                <h1>DEPARTMENTS</h1>
                <p>A list of all our Departments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cosmetic_department">
          <img
            alt=""
            src="https://plethorathemes.com/healthflex/wp-content/uploads/2015/10/cosmetic.jpg"
          />
          <div className="cosmetic_department_inner">
            <h2>COSMETIC SURGERY DEPARTMENT</h2>
            <h4>Specialized in Rhinoplasty</h4>
            <p>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button>VISIT DEPARTMENT</button>
          </div>
        </div>
      </div>
      <div className="medical_info_boxes_wraper">
        <div className="container">
          <Department departmentImage={"/assets/cosmeticHeadDepartment.jpg"} />
        </div>
      </div>
      <div className="container">
        <div className="cosmetic_department">
          <img
            alt=""
            src="https://plethorathemes.com/healthflex/wp-content/uploads/2015/09/slider-4.jpg"
          />
          <div className="cosmetic_department_inner">
            <h2>COSMETIC SURGERY DEPARTMENT</h2>
            <h4>Specialized in Rhinoplasty</h4>
            <p>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button>VISIT DEPARTMENT</button>
          </div>
        </div>
      </div>
      <div className="medical_info_boxes_wraper">
        <div className="container">
          <Department departmentImage={"/assets/cosmeticHeadDepartment.jpg"} />
        </div>
      </div>
      <div className="departments_footer">
        <div className="container">
          <div className="departments_footer_inner">
            <h2>WANT TO SCHEDULE AN APPOINTMENT?</h2>
            <p>
              Call us at (+555) 959-595-959 or fill in the appointment form..
            </p>
            <button>Appointment from</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Departments;
