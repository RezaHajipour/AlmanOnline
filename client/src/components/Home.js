import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import LatestNews from "./LatestNews";

const Home = () => {
    const [latestNews, setLatestNews] = useState([]);
    console.log("latestNews", latestNews);
    useEffect(() => {
        fetch("/api/latestnews").then((res) =>
            res.json().then((data) => setLatestNews(data))
        );
    });
    return (
        <div>
            home
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
    );
};

export default Home;
