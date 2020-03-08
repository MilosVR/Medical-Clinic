import React from "react";

const Post = props => {
  const { post } = props;

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <div className="post_date_and_categories">
        <div className="post_date">
          <i className="far fa-calendar-alt"></i>
          <p>{post.date}</p>
        </div>
        <span>{post.category}</span>
      </div>
      <div className="post_image">
        <img src={post.img} alt="" />
      </div>
      <div className="post_description">
        <p>{post.description.trim().slice(0, 200)}...</p>
      </div>
      <button>Read More</button>
    </div>
  );
};

export default Post;
