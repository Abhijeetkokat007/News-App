import React from "react";
import "./NewsArticle.css";

function NewsArticle(
  {author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content}
) {
  return (
    <>
      <div>
        <div className="card">
        <img src={urlToImage} alt="image" className="image-news" />
          <h3>{title} </h3>
          <div className="artical-info">
            <p>{author}</p>
            <p>{publishedAt}</p>
          </div>
          <p>{description}</p>
          <a href={url} target='_blank'>Read More</a>
        </div>
      </div>
    </>
  );
}

export default NewsArticle;
