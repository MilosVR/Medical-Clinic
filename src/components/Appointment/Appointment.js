import React, { useEffect } from "react";
import "./Appointment.scss";
import Footer from "../Footer/Footer";

const Appointment = props => {
  const toggleSelectDepartment = () => {
    const select_department_toggle = document.querySelector(
      ".select_department_toggle"
    );
    if (!select_department_toggle.classList.contains("isSelectDepartments")) {
      select_department_toggle.classList.add("isSelectDepartments");
    } else {
      select_department_toggle.classList.remove("isSelectDepartments");
    }
  };
  const closeSelectList = e => {
    const select_department_toggle = document.querySelector(
      ".select_department_toggle"
    );
    const select_departments_main = document.querySelector(
      ".select_departments_main"
    );
    select_departments_main.innerHTML = e.target.innerHTML;
    select_department_toggle.classList.remove("isSelectDepartments");
  };

  return (
    <div className="appointment">
      <div className="appointment_header_wraper">
        <div className="appointment_header">
          <div className="appointment_headline">
            <div className="container">
              <div className="appointment_headline_inner">
                <h1>About us</h1>
                <p>We are a modern Medical Clinic </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about_us_body">
          <div className="about_us_description">
            <div className="about_us_description_inner">
              <p>
                {" "}
                Our team strives to achieve excellence in every aspect of the
                production process, from the preliminary hand-drawn sketches to
                the aftersales support. We carefully design our themes to be
                easy and flexible while making sure that most FAQ of our
                customers can be answered by our detailed documentation.
              </p>

              <div className="about_us_description_title">
                <h2>OUR VISION</h2>
                <span></span>
              </div>
              <p>
                We focus on using the latest web standards and practices
                regarding UX guidelines and WordPress theme development and
                strongly encourage our customers to follow us on this. The use
                of a child theme and the plugin-based development of ©Plethora
                Framework ensure hassle-free updates and peace of mind.
                Personalized patient care is what sets California Pacific
                Medical Center apart. When you visit one of our four San
                Francisco campus locations you can expect to receive world class
                care. Expert physician specialists and caring clinical staff
                provide you with an exceptional health care experience.
              </p>
            </div>
            <div className="about_us_description_video">
              <iframe
                className="video"
                src="https://player.vimeo.com/video/67157062"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
          <div className="about_us_sponsors">
            <img src="/assets/about_us/sponsor-1.png" alt="" />
            <img src="/assets/about_us/sponsor-2.png" alt="" />
            <img src="/assets/about_us/sponsor-3.png" alt="" />
            <img src="/assets/about_us/sponsor-4.png" alt="" />
          </div>
          <div className="facilities">
            <h2>FACILITIES</h2>
            <h4>We constantly invest in high-end equipment</h4>
            <div className="about_us_sponsors_img">
              <img
                src="https://plethorathemes.com/healthflex/wp-content/uploads/2013/06/health_clinic_outside.jpg"
                alt=""
              />
              <p>
                Our team strives to achieve excellence in every aspect of the
                production process, from the preliminary hand-drawn sketches to
                the aftersales support. We carefully design our themes to be
                easy and flexible while making sure that most FAQ of our
                customers can be answered by our detailed documentation.
                <br />
                <br /> We focus on using the latest web standards and practices
                regarding UX guidelines and WordPress theme development and
                strongly encourage our customers to follow us on this. The use
                of a child theme and the plugin-based development of ©Plethora
                Framework ensure hassle-free updates and peace of mind.
                <br />
                <br /> Personalized patient care is what sets California Pacific
                Medical Center apart. When you visit one of our four San
                Francisco campus locations you can expect to receive world class
                care. Expert physician specialists and caring clinical staff
                provide you with an exceptional health care experience.
              </p>
            </div>
            <div className="about_gallery">
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-1.jpg" alt="" />
              </div>
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-2.jpg" alt="" />
              </div>
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-3.jpg" alt="" />
              </div>
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-4.jpg" alt="" />
              </div>
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-5.jpg" alt="" />
              </div>
              <div className="about_gallery_img">
                <img src="/assets/about_us/gallery_img-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_us_testimonial">
        <div className="about_us_testimonial_image_bg">
          <img
            src="https://plethorathemes.com/healthflex/wp-content/uploads/2015/09/family1.jpg"
            alt=""
          />
        </div>
        <div className="about_us_testiomnial_title">
          <h1> WE PROMISED TO TAKE CARE… AND DELIVERED</h1>
          <p>Testimonials Slider Feature</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;
