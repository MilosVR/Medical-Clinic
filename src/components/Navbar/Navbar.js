import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navbar_main_links = document.querySelector(".navbar_main_links");
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const navbar_body = document.querySelector(".navbar_body");
    const navbar_header = document.querySelector(".navbar_header");

    const toggleNavbar = e => {
      if (!navbar_main_links.classList.contains("toggleMenu")) {
        navbar_main_links.classList.add("toggleMenu");
        navbar_body.classList.add("toggleMenu");
        navbar_header.classList.add("toggleMenu");
        hamburger_menu.classList.add("toggleMenu");
      } else {
        navbar_main_links.classList.remove("toggleMenu");
        navbar_body.classList.remove("toggleMenu");
        navbar_header.classList.remove("toggleMenu");
        hamburger_menu.classList.remove("toggleMenu");
      }
    };

    hamburger_menu.addEventListener("click", toggleNavbar);

    const changeNavbarBG = e => {
      let scroll_position = window.scrollY;
      const navbar = document.querySelector(".navbar");
      if (scroll_position > 0) {
        navbar.style.background = "#4575bd";
      } else if (scroll_position > 500) {
        navbar.style.background = "red";
      } else {
        navbar.style.background = "transparent";
      }
    };
    window.addEventListener("scroll", changeNavbarBG);
    return () => {
      window.removeEventListener("scroll", changeNavbarBG);
    };
  });
  return (
    <div className="navbar">
      <div className="navbar_header">
        <div className="container">
          <ul className="navbar_header_contact">
            <li>FAQ</li>
            <li>Book Appointment</li>
            <li>Contacts</li>
            <li>example@example.com</li>
            <img alt="" src="/assets/logo.png" />
          </ul>
          <ul className="navbar_header_social_links">
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-google-plus-g"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar_body">
        <div className="container">
          <div className="navbar_body_logo">
            <img alt="" src="/assets/logo.png" />
          </div>
          <div className="hamburger_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar_main_links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/department">Deprtments</Link>
              </li>
              <li>
                <Link to="/appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
