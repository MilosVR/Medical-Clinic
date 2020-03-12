import React from "react";
import "./Contact.scss";
import ContactMap from "./ContactMap";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="navbar_mask"></div>
      <div className="contact_header_wraper">
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=44.871039,20.6356412&amp;q=Milke%20Markovic%2C%20Pancevo+(Heisenberg)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>

        <div className="contact_header">
          <div className="contact_headline">
            <div className="container">
              <div className="contact_headline_inner">
                <h1>Contact</h1>
                <p>A list of all our contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact_body">
          <div className="contact_form">
            <form>
              <div>
                <input type="text" placeholder="Full Name" />
              </div>
              <div>
                <input type="date" />
              </div>
              <div>
                {" "}
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>

              <div>
                {" "}
                <textarea
                  placeholder="Message"
                  name="contact_textarea"
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
          <div className="contact_info">
            <img src="/assets/contact_icon.png" alt="" />
            <h2>CONTACT INFO & DETAILS</h2>
            <p>
              Premium WordPress Theme mainly Medical Oriented but so flexible
              that lets you build various layouts for any “Health & Beauty”
              related business!
            </p>
            <p>Working hours: 9am – 5pm on weekdays</p>
            <p>(+30) 210 1234567</p>
            <p>info@plethomedicalclinic.com</p>
            <p>79 Folsom Ave, San Francisco, CA 94107</p>
            <h2>APPOINTMENT REQUEST</h2>
            <p>
              If you wish to book an appointment with a doctor, it is best that
              you visit the{" "}
              <Link to="/appointment">Appointment Booking Page</Link> directly.
            </p>
          </div>
        </div>
      </div>
      <div className="driving_services">
        <div className="container">
          <div className="driving_services_inner">
            <i className="fas fa-car"></i>
            <h3>PARKING SPACES</h3>
            <p>You can park your car just outside</p>
          </div>
          <div className="driving_services_inner">
            <i className="fas fa-wheelchair"></i>
            <h3>BUS ROUTES</h3>
            <p>Bus nr.23 leaves you just in front</p>
          </div>
          <div className="driving_services_inner">
            <i className="fas fa-bus-alt"></i>
            <h3>ACCESIBILITY</h3>
            <p>We use ramps for easier access.</p>
          </div>
        </div>
      </div>
      <div className="contact_news_letter">
        <div className="contact_news_letter_overlay"></div>
        <h1>
          GRAB OUR <span>HEALTH</span> NEWSLETTER
        </h1>
        <p>Subscribe to our awesome malichimp.com list</p>
        <form>
          <input type="text" placeholder="Email Adress" />
          <button>SUBSCRIBE</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
