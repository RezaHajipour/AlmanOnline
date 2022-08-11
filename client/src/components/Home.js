import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import LatestNews from "./LatestNews";
import "../styles/Home.css";

const Home = () => {
    const [latestNews, setLatestNews] = useState([]);
    console.log("latestNews", latestNews);
    useEffect(() => {
        fetch("/api/latestnews").then((res) =>
            res.json().then((data) => setLatestNews(data))
        );
    });
    return (
        <div className="container">
            <section className="headContainer">
                <div className="headRight">
                    <h2 className="headTitle">آخرین خبر</h2>
                    <div className="headline">
                        {!latestNews ? (
                            <p>loading...</p>
                        ) : (
                            latestNews.map((news, index) => (
                                <Grid item key={index}>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="none"
                                        onClick={() => {
                                            console.info("I'm a button.");
                                        }}
                                    >
                                        <LatestNews news={news} />
                                    </Link>
                                </Grid>
                            ))
                        )}
                    </div>
                </div>
                <div className="headMiddle">
                    <h2 className="headTitle"> سر خط خبرها</h2>
                </div>
                <div className="headLeft">
                    <h2 className="headTitle"> گزیده ها</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;
