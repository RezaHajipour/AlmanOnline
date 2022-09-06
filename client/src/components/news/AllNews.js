import "../../styles/News.css";
// import Nav from "../Nav";
// import Footer from "../Footer";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

const AllNews = () => {
    const [allnews, setAllNews] = useState([]);

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
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100vw",
                }}
            >
                <h2 className="newsTitle"> اخبار</h2>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 1, md: 2 }}
                    sx={{
                        width: "100%",
                        mr: 0,
                        mb: 1,
                        justifyContent: "center",
                    }}
                >
                    {!allnews ? (
                        <p>loading...</p>
                    ) : (
                        allnews.map((news) => (
                            <Grid item key={news.id} sx={{ mt: 2 }}>
                                <NewsCard news={news} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    );
};

export default AllNews;
