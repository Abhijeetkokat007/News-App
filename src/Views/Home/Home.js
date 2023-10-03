import React, { useState } from "react";
import axios from "axios";
import NewsArticle from "./../../Components/NewsArticle/NewsArticle";
import "./Home.css";

function Home() {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=pune&from=2023-09-03&sortBy=popularit&apiKey=cd831287c8b74f09a3a4861c8d5306e1"
    );
    setNews(response.data.articles);
  };

  useState(() => {
    loadNews();
  }, []);
  return (
    <div>
      <h1 className="headline">News App</h1>
      <div className="dis-flex">
        {news.map((newsArticals, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticals;

          return (
            <>
              <NewsArticle
                author={author}
                title={title}
                description={description}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                content={content}
                key={index}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
