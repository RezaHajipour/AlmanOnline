import "../../styles/News.css";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

const AllNews = () => {
    const [allnews, setAllNews] = useState([]);

    console.log("allnews", allnews);

    useEffect(() => {
        fetch("/api/news", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setAllNews(data);
            });
    }, []);

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-end",
                width: "100%",
                mr: 1,
            }}
        >
            <h2 className="newsTitle"> اخبار</h2>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 1, md: 2 }}
                sx={{ width: "93%", mr: 0, mb: 1 }}
            >
                {!allnews ? (
                    <p>loading...</p>
                ) : (
                    allnews.map((news) => (
                        <Grid item key={news.id} sx={{ mt: 2 }}>
                            <Link
                                component="button"
                                variant="body2"
                                underline="none"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                <NewsCard news={news} />
                            </Link>
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default AllNews;
