import "../styles/newscard.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NewsCard = ({ news }) => {
    console.log("news card", news);
    return (
        <Grid item xs={3}>
            <Paper elevation={3} square>
                <img
                    src={news.news_picture_url}
                    className="newsImg"
                    alt="news image"
                    height="140"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle2" component="h2">
                        {news.title}
                    </Typography>
                    <Typography variant="body2" component="h4">
                        {news.description}
                    </Typography>
                </Box>
                <Box paddingX={1}>
                    <Typography variant="body2" component="p">
                        category:{news.category}
                    </Typography>
                    <Typography variant="body2" component="p">
                        location:{news.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Published on <span></span>
                        <time>
                            {new Date(news.created_at).toLocaleDateString()}
                        </time>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default NewsCard;
