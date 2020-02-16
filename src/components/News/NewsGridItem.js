import React from "react";

const NewsGridItem = props => {
  return (
    <div className="news_grid_item">
      <div className="news_grid_item_image">
        <div className="news_grid_item_date">
          <span>22</span>
          <p>DEC</p>
        </div>
        <img alt="" src={`/assets/news/news-${props.newsImage}.jpg`} />
      </div>
      <div className="news_grid_item_body">
        <h4>DIFFERENT TYPES OF STROKE</h4>
        <p>
          Lorem ipsum dolor adipisicing amet, consectetur sit elit. Aspernatur
          incidihil quo officia.
        </p>
        <div className="news_grid_item_body_btns">
          <div className="news_grid_item_body_btns_likes">
            <i className="fas fa-thumbs-up">
              <span> 12</span>
            </i>
            <i className="fas fa-thumbs-down">
              <span> 2</span>
            </i>
          </div>
          <div className="news_grid_item_body_btns_read_more">
            <p>Read More</p>
            {/* <i class="fas fa-arrow-right"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGridItem;
