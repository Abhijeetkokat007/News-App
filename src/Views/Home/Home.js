import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./../../Components/NewsArticle/NewsArticle";
import "./Home.css";

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("BMW");

  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=cd831287c8b74f09a3a4861c8d5306e1`
      );
      setNews(response.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useState(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews()
  }, [searchQuery])
  return (
    <div>
      <h1 className="headline">News App</h1>

      <div className="input-div">
        <input className="input" type="text" value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }} />
      </div>
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
// return value
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
                url={url}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
