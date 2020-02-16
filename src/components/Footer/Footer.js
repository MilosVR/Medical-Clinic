import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wraper">
          <div className="footer_main_info">
            <img src="/assets/logo.png" alt="" />
            <p>
              Premium Wordpress Theme mainly Medical Oriented but so flexible
              that lets you build various layouts for any "Health & Beauty"
              related business!
            </p>
            <div className="footer_main_info_contact">
              <div className="footer_main_info_contact_item">
                <i className="fas fa-phone-alt"></i>
                <p>(+30) 210 1234567</p>
              </div>
              <div className="footer_main_info_contact_item">
                <i className="far fa-envelope"></i>
                <p>(+30) 210 1234567</p>
              </div>
              <div className="footer_main_info_contact_item">
                <i className="fas fa-location-arrow"></i>
                <p>(+30) 210 1234567</p>
              </div>
            </div>
          </div>
          <div className="footer_quick_links">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>ALL MEDICAL SERVICES</li>
              <li>APPOINTMENT BOOKING</li>
              <li>FAQ</li>
              <li>FEES & INSURANCE</li>
              <li>HEALTH LIBRARY A-Z</li>
              <li>FREE CHECKUP OFFER</li>
            </ul>
            <div className="footer_quick_links_social_links">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="footer_news">
            <h3>LATEST NEWS</h3>
            <div className="footer_news_item">
              <div className="footer_news_image">
                <img src="/assets/news/news-1.jpg" alt="" />
              </div>
              <div className="footer_news_item-info">
                <h5>DAILY EXERCISE IS ESSENTIAL</h5>
                <p>When was the last time you went out for a...</p>
              </div>
            </div>
            <div className="footer_news_item">
              <div className="footer_news_image">
                <img src="/assets/news/news-2.jpg" alt="" />
              </div>
              <div className="footer_news_item-info">
                <h5>DAILY EXERCISE IS ESSENTIAL</h5>
                <p>When was the last time you went out for a...</p>
              </div>
            </div>
            <div className="footer_news_item">
              <div className="footer_news_image">
                <img src="/assets/news/news-3.jpg" alt="" />
              </div>
              <div className="footer_news_item-info">
                <h5>DAILY EXERCISE IS ESSENTIAL</h5>
                <p>When was the last time you went out for a...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright_wraper">
        <div className="container">
          <div className="footer_copyright">
            <p>Copyright ©2020 Heisenberg all rights reserved</p>
            <p>
              Designed by <span>Milos Novovic</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
