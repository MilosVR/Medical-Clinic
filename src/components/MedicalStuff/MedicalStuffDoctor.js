import React from "react";

const MedicalStuffDoctor = props => {
  return (
    <div className="medical_stuff_doctor">
      <div className="medical_stuff_doctor_image">
        <img alt="" src={`/assets/doctors/doctor-${props.image}.png`} />
        <div className="medical_stuff_doctor_overlay">
          <div className="medical_stuff_doctor_overlay_contact">
            <i className="fas fa-phone-alt"></i>
            <p>Mob: +002368</p>
          </div>
          <div className="medical_stuff_doctor_overlay_contact">
            <i className="far fa-envelope"></i>
            <p>Email</p>
          </div>
          <p className="medical_stuff_overlay_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            hic. Ipsum blanditiis, adipisci.
          </p>
          <div className="medical_stuff_doctor_overlay_social_icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-skype"></i>
          </div>
        </div>
      </div>
      <div className="medical_stuff_info">
        <h3>{props.doctorName}</h3>
        <p>PharmD</p>
      </div>
    </div>
  );
};

export default MedicalStuffDoctor;
