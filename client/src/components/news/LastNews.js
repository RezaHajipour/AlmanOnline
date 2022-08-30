import { useState, useEffect } from "react";
import { Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

const LastNews = () => {
    const classes = useStyles();

    const [lastNews, setLastNews] = useState([]);
    // console.log("last news", lastNews);

    useEffect(() => {
        fetch("/api/lastnews", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setLastNews(data);
            });
    }, []);

    return (
        <div>
            {!lastNews ? (
                <p>loading...</p>
            ) : (
                lastNews.map((lastnews) => (
                    <Grid item key={lastnews.id}>
                        <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={lastnews.news_picture_url}
                                    title="Contemplative Reptile"
                                />

                                <h2
                                    className={classes.text}
                                    variant="h5"
                                    component="h2"
                                >
                                    {lastnews.title}
                                </h2>
                            </Card>
                        </Link>
                    </Grid>
                ))
            )}
        </div>
    );
};

export default LastNews;

const useStyles = makeStyles(() => ({
    card: {
        // position: "relative",
        display: "inline-block" /* Make the width of box same as image */,
        width: "550px",
        height: "300px",
    },
    media: {
        height: "300px",
        paddingTop: "56.25%", // 16:9
    },
    cardImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },

    text: {
        position: "absolute",
        zIndex: "999",
        margin: "0 auto",
        textAlign: "center",
        left: "0",
        right: "0",
        top: "60%" /* Adjust this value to move the positioned div up and down */,
        width: "90%" /* Set the width of the positioned div */,
        fontSize: "1.8em",
        // color: "#f8f8f8",
        color: "#FAF9F6",
        textShadow: " 0 1px 0 rgba(0, 0, 0, 0.5)",
    },
}));

//   <img
//       component="img"
//       alt="news Image"
//       src={lastnews.news_picture_url}
//       className={classes.cardImage}
//   />;

//    <Card className={classes.card}>
//             <img
//                 component="img"
//                 alt="news Image"
//                 src={lastnews.news_picture_url}
//             />
//             <h2 className={classes.text} variant="h5" component="h2">
//                 {lastnews.title}
//             </h2>
//         </Card>
