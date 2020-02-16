import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe_description">
          <h2>Join our Mailing List for Updates</h2>
          <p>
            Stay in Touch and enim ad veniam quis nostrud exercitation ullamco
          </p>
        </div>
        <div className="subscribe_form">
          <form>
            <input placeholder="Enter your email adress" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
