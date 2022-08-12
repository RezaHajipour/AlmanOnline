import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const LastNews = ({ lastnews }) => {
    const classes = useStyles();
    // console.log("latestNews", latestNews);

    return (
        <Card className={classes.card}>
            <img
                component="img"
                alt="news Image"
                src={lastnews.news_picture_url}
            />
            <h2 className={classes.text} variant="h5" component="h2">
                {lastnews.title}
            </h2>
        </Card>
    );
};

export default LastNews;

const useStyles = makeStyles(() => ({
    card: {
        position: "relative",
        display: "inline-block" /* Make the width of box same as image */,
        width: "550px",
        height: "300px",
    },

    text: {
        position: "absolute",
        zIndex: "999",
        margin: "0 auto",
        textAlign: "center",
        left: "0",
        right: "0",
        top: "70%" /* Adjust this value to move the positioned div up and down */,
        width: "80%" /* Set the width of the positioned div */,
        color: "#f8f8f8",
    },
}));
