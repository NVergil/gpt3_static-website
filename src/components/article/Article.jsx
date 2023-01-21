import React from "react";
import "./article.css";

const Article = ({ imgUrl, imgAlt, date, title, typeData }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt={imgAlt}  />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3 data-type={typeData}>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
