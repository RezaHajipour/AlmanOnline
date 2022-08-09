// import "../styles/newscard.css";

import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@mui/material";

const NewsCard = ({ news }) => {
    console.log("news card image", news.news_picture_url);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={news.news_picture_url}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {news.title}
                </Typography>
                <Typography variant="body2" component="h4">
                    {news.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>

            <Typography variant="body2" component="h4" color="text.secondary">
                Published on <span></span>
                <time>{new Date(news.created_at).toLocaleDateString()}</time>
            </Typography>
        </Card>
    );
};

export default NewsCard;
