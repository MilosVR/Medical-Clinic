import React, { useEffect } from "react";
import "./Blog.scss";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import Post from "./Post";
import { Link } from "react-router-dom";

const Blog = props => {
  return (
    <div className="blog">
      <div className="blog_header_wraper">
        <div className="blog_header">
          <div className="blog_headline_title">
            <div className="container">
              <div className="blog_headline_inner">
                <h1>THE BLOG</h1>
              </div>
            </div>
          </div>
          <div className="blog_headline_description">
            <div className="container">
              <div className="blog_headline_inner">
                <p>Medical Articles & News</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="blog_body">
          <div className="body_news">
            {props.posts.map(item => {
              return <Post post={item} key={item.id} />;
            })}
          </div>
          <div className="blog_side_section">
            <Link to="health_coach">
              <img src="/assets/news/health_coach.png" alt="" />
            </Link>
            <div className="search_post_form">
              <form>
                <input type="text" placeholder="Search..." />
                <i className="fas fa-search"></i>
              </form>
            </div>
            <div className="post_categories">
              <div className="post_categories_title">
                <h2>CATEGORIES</h2>
                <p></p>
              </div>
              <ul>
                <li>EDUCATIONAL VIDEOS</li>
                <li>MEDICAL ARTICLES</li>
                <li>NEWS</li>
                <li>USEFULL INFO LINKS</li>
              </ul>
            </div>
            <div className="post_categories">
              <div className="post_categories_title">
                <h2>ARCHIVES</h2>
                <p></p>
              </div>
              <ul>
                <li>NOVEMBER 2019</li>
                <li>DECEMBER 2020</li>
              </ul>
            </div>
            <div className="post_categories">
              <div className="post_categories_title">
                <h2>WIDGET</h2>
                <p></p>
              </div>
              <p>
                Fugiat dapibus, tellus ac cursus commodo, mauesris condime ntum
                nibh, ut fermentum mas justo sitters amet risus. Cras mattis
                cosi sectetut amet fermens etrsaters tum aecenas faucib sadips
                amets.
              </p>
            </div>
            <div className="tag_cloud">
              <div className="post_categories_title">
                <h2>TAGS</h2>
                <p></p>
              </div>
              <div className="tag_grid">
                <p>Article</p>
                <p>Clinic</p>
                <p>Diabetes</p>
                <p>Diet</p>
                <p>Exercise</p>
                <p></p>
                <p>Fitness</p>
                <p>Health</p>
                <p>Medical</p>
                <p>Sugar</p>
                <p>Tips</p>
                <p>Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const actions = {};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, actions)(Blog);
