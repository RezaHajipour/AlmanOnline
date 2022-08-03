import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const News = () => {
    const [allnews, setAllNews] = useState([]);
    console.log("allnews", allnews);

    useEffect(() => {
        fetch("/api/news").then((res) =>
            res.json().then((data) => setAllNews(data))
        );
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {!allnews ? (
                    <p>loading...</p>
                ) : (
                    allnews.map((news, index) => (
                        <NewsCard key={index} news={news} />
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default News;
