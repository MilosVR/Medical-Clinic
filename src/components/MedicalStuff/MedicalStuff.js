import React from "react";
import "./MedicalStuff.scss";
import MedicalStuffDoctor from "./MedicalStuffDoctor";

const MedicalStuff = props => {
  return (
    <div className="medical_stuff">
      <div className="container">
        <div className="medical_stuff_headline">
          <h1>
            MEET OUR <span>DOCTORS</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem temporibus quisquam voluptas natus, provident porro et odio
            perferendis ipsam, amet sint
          </p>
        </div>
        <div className="medical_stuff_doctors_grid">
          <MedicalStuffDoctor image={1} doctorName={"Sara Parker"} />
          <MedicalStuffDoctor image={2} doctorName={"John Doe"} />
          <MedicalStuffDoctor image={3} doctorName={"Mark Doe"} />
          <MedicalStuffDoctor image={4} doctorName={"Stann Doe"} />
        </div>
      </div>
    </div>
  );
};

export default MedicalStuff;
