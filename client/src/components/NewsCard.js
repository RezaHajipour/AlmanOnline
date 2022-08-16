// import "../styles/newscard.css";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const NewsCard = ({ news }) => {
    // console.log("news card image", news.news_picture_url);
    return (
        <Card variant="string" sx={{ width: 250, height: "250px" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={news.news_picture_url}
            />

            <CardContent sx={{ mt: -2 }}>
                <Typography gutterBottom variant="h6" component="h2">
                    {news.title}
                </Typography>
                <Typography variant="body2" component="p">
                    Published on <span></span>
                    <time>
                        {new Date(news.created_at).toLocaleDateString()}
                    </time>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
