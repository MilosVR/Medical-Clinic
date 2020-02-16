import React from "react";

const Department = props => {
  return (
    <div className="medical_info_boxes">
      <div className="medical_info_box">
        <img
          src={props.departmentImage}
          alt=""
          style={{ borderRadius: "50%" }}
        />
        <div className="medical_info_box-description">
          <h4>DEPARTMENTS</h4>
          <p>Dr. Ema Stankovic</p>
        </div>
        <button>More</button>
      </div>
      <div className="medical_info_box">
        <i className="fa fa-stethoscope fa-4x"></i>
        <div className="medical_info_box-description">
          <h4>COSMETIC SURGERY DEP.</h4>
          <p>Hall C, floor 4</p>
        </div>
        <button>More</button>
      </div>
      <div className="medical_info_box">
        <i className="fas fa-user-md fa-4x"></i>
        <div className="medical_info_box-description">
          <h4>FREE EVALUATION</h4>
          <p>A meeting to discuss your case</p>
        </div>
        <button>More</button>
      </div>
      <div className="medical_info_box">
        <i class="fas fa-phone-volume fa-4x"></i>
        <div className="medical_info_box-description">
          <h4>DIRECT CONTACT</h4>
          <p>9am - 5pm Helpdesk</p>
        </div>
        <button>More</button>
      </div>
    </div>
  );
};

export default Department;
