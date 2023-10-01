import React, { useState } from "react";
import axios from "axios";
import './Home.css';

function Home(){
 const [news, setNews] = useState([])

 const loadNews = async ()=>{
    const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-09-01&sortBy=popularit&apiKey=cd831287c8b74f09a3a4861c8d5306e1")
    setNews(response.data.articles)
 }

 useState(()=>{
    loadNews()
 } , [])
    return(
        <div>
            <h1>News App

            </h1>

            {
                news.map((newsArticals, index)=>{
                    const{author, title, description, url, urlToImage, poblishedAt, content} = newsArticals

                    return (
                        <div className="card">
                            <h2>{title} </h2>
                            <img src={urlToImage} alt="image" className="image-news"/>
                            </div>
                    )
                })
            }
        </div>
    )
}


export default Home