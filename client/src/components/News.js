import React, { useEffect, useState } from "react";

const News = () => {
    const [news, setNews] = useState([]);
    console.log(news);

    useEffect(() => {
        fetch("/api/news").then((res) =>
            res.json().then((data) => setNews(data))
        );
    }, []);

    return (
        <div>
            <h1>News component</h1>
            {!news ? (
                <p>loading...</p>
            ) : (
                news.map((eachNews, index) => (
                    <li key={index}>
                        <h2>{eachNews.title}</h2>
                        <p>{eachNews.description}</p>
                        <h4> {eachNews.category}</h4>
                        <h6>{eachNews.location}</h6>
                        <h4> {eachNews.created_at}</h4>
                    </li>
                ))
            )}
        </div>
    );
};

export default News;
