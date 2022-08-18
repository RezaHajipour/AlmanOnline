import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

const LastNews = () => {
    const classes = useStyles();

    const [lastNews, setLastNews] = useState([]);

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
                                <img
                                    component="img"
                                    alt="news Image"
                                    src={lastnews.news_picture_url}
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
