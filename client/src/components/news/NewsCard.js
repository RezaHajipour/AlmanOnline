import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    // console.log("news card image", news.news_picture_url);
    return (
        <>
            <Link to={`news/${news.id}`} style={{ textDecoration: "none" }}>
                <Card
                    dir="rtl"
                    variant="string"
                    sx={{ width: 250, height: "250px" }}
                >
                    <CardMedia
                        component="img"
                        alt="image"
                        height="140"
                        image={news.news_picture_url}
                    />

                    <CardContent sx={{ mt: -1 }}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h2"
                            sx={{
                                lineHeight: 1.1,
                                letterSpacing: 0,
                                fontWeight: 600,
                                fontSize: "1.05rem",
                            }}
                        >
                            {news.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ AlignSelf: "flex-end" }}
                        >
                            Published on <span></span>
                            <time>
                                {new Date(news.created_at).toLocaleDateString()}
                            </time>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    );
};

export default NewsCard;
