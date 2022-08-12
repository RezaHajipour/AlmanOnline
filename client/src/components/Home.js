import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import LastNews from "./LastNews";
import "../styles/Home.css";

const Home = () => {
    const [lastNews, setLastNews] = useState([]);
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        fetch("/api/lastnews").then((res) =>
            res.json().then((data) => setLastNews(data))
        );
    });
    useEffect(() => {
        fetch("/api/headlines").then((res) =>
            res.json().then((data) => setHeadlines(data))
        );
    });
    return (
        <div className="container">
            <p className="date">امروز&nbsp;</p>
            <section className="headContainer">
                <div className="headRight">
                    <h2 className="headTitle">آخرین خبر</h2>
                    <div className="headline">
                        {!lastNews ? (
                            <p>loading...</p>
                        ) : (
                            lastNews.map((lastnews, index) => (
                                <Grid item key={index}>
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="none"
                                        onClick={() => {
                                            console.info("I'm a button.");
                                        }}
                                    >
                                        <LastNews lastnews={lastnews} />
                                    </Link>
                                </Grid>
                            ))
                        )}
                    </div>
                </div>
                <div className="headMiddle">
                    <h2 className="headTitle"> سر خط خبرها</h2>
                    {!headlines ? (
                        <p>loading...</p>
                    ) : (
                        headlines.map((headline, index) => (
                            <Grid item key={index}>
                                <Link
                                    component="button"
                                    variant="body2"
                                    underline="none"
                                    onClick={() => {
                                        console.info("I'm a button.");
                                    }}
                                    sx={{
                                        textdecoration: "none",
                                        color: "#151922",
                                        mb: 1,
                                    }}
                                >
                                    <p className="headline">{headline.title}</p>
                                </Link>
                            </Grid>
                        ))
                    )}
                </div>
                <div className="headLeft">
                    <h2 className="headTitle"> گزیده ها</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;
