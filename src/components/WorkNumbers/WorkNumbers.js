import React, { useEffect } from "react";
import "./WorkNumbers.scss";

const WorkNumbers = props => {
  useEffect(() => {
    let hospitalization = 0;
    let ambulatory = 0;
    let doctors = 0;
    let labtest = 0;
    let hospitalization_div = document.querySelector(".hospitalization span");
    let ambulatory_cases = document.querySelector(".ambulatory_cases span");
    let employed_doctors = document.querySelector(".employed_doctors span");
    let laboratory_test = document.querySelector(".laboratory_test span");

    hospitalization_div.innerHTML = "";
    ambulatory_cases.innerHTML = "";
    employed_doctors.innerHTML = "";
    laboratory_test.innerHTML = "";

    const loadWorkNumbers = e => {
      let work_numbers = document.querySelector(".work_numbers_wraper");
      let elementTop = Math.round(work_numbers.getBoundingClientRect().top);

      if (elementTop < 500) {
        let hospitalizationNum = 20537;
        let ambulatoryNum = 16205;
        let employedDoctorsNum = 10852;
        let laboratoryTestNum = 12460;

        setInterval(() => {
          if (
            hospitalization < hospitalizationNum &&
            ambulatory < ambulatoryNum &&
            labtest < laboratoryTestNum &&
            doctors < employedDoctorsNum
          ) {
            hospitalization += 5;
            ambulatory += 5;
            labtest += 5;
            doctors += 5;
          } else {
            hospitalization = hospitalizationNum;
            ambulatory = ambulatoryNum;
            labtest = laboratoryTestNum;
            doctors = employedDoctorsNum;
          }
          hospitalization_div.innerHTML = hospitalization;
          ambulatory_cases.innerHTML = ambulatory;
          employed_doctors.innerHTML = doctors;
          laboratory_test.innerHTML = labtest;
        }, 1);
      }
    };

    window.addEventListener("scroll", loadWorkNumbers);
    return () => {
      window.removeEventListener("scroll", loadWorkNumbers);
    };
  }, []);

  return (
    <div className="work_numbers_wraper">
      <div className="container">
        <div className="work_numbers">
          <div className="work_numbers_item hospitalization">
            <img alt="" src="/assets/work-number-icon/ambulance.png" />
            <span>20 537</span>
            <p>HOSPITALIZATION</p>
          </div>
          <div className="work_numbers_item ambulatory_cases">
            <img alt="" src="/assets/work-number-icon/monitor.png" />
            <span>20 537</span>
            <p>AMBULATORY CASES</p>
          </div>
          <div className="work_numbers_item employed_doctors">
            <img alt="" src="/assets/work-number-icon/doctor.png" />
            <span>20 537</span>
            <p>EMPLOYED DOCTORS</p>
          </div>
          <div className="work_numbers_item laboratory_test">
            <img alt="" src="/assets/work-number-icon/heart.png" />
            <span>20 537</span>
            <p>LABORATORY TESTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkNumbers;
