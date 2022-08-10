import {
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const LatestNews = ({ news }) => {
    const classes = useStyles();
    // console.log("latestNews", latestNews);

    return (
        <Box my={2}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        media="picture"
                        alt="Contemplative Reptile"
                        src={news.news_picture_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {news.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            className={classes.fiCardContentTextSecondary}
                            component="p"
                        >
                            {news.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default LatestNews;

const useStyles = makeStyles(() => ({
    card: {
        position: "relative",
        maxWidth: 345,
    },
    CardContent: {
        position: "relative",
        backgroundColor: "transparent",
        color: "#ffffff",
    },
    fiCardContentTextSecondary: { color: "rgba(255,255,255,0.78)" },
}));

//    <Card variant="string" sx={{ width: "450px", height: "250px" }}>
//             <CardContent sx={{ mt: -2 }}>
//                 <img alt="green iguana" src={news.news_picture_url} />

//                 <Typography gutterBottom variant="h6" component="h2">
//                     {news.title}
//                 </Typography>
//             </CardContent>
//         </Card>
