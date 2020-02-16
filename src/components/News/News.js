import React from "react";
import "./News.scss";
import NewsGridItem from "./NewsGridItem";

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="news_headline">
          <h1>News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            autemvoluptatem obcaecati!
          </p>
        </div>
        <div className="news_grid">
          <NewsGridItem newsImage={1} />
          <NewsGridItem newsImage={2} />
          <NewsGridItem newsImage={3} />
          <NewsGridItem newsImage={4} />
          <NewsGridItem newsImage={5} />
          <NewsGridItem newsImage={6} />
        </div>
      </div>
    </div>
  );
};

export default News;
