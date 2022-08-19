import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Headlines = () => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        fetch("/api/headlines", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setHeadlines(data);
            });
    }, []);

    return (
        <div>
            {!headlines ? (
                <p>loading...</p>
            ) : (
                headlines.map((headline) => (
                    <Grid item key={headline.id}>
                        <Link to={`news/${headline.id}`}>
                            <Typography
                                className="headline"
                                component="a"
                                href="/news:"
                                sx={{
                                    textdecoration: "none",
                                    color: "#151922",
                                    mb: 1,
                                }}
                            >
                                {headline.title}
                            </Typography>
                        </Link>
                    </Grid>
                ))
            )}
        </div>
    );
};
export default Headlines;

// <Link
//     component="button"
//     variant="body2"
//     underline="none"
//     onClick={() => {
//         console.info("I'm a button.");
//     }}
//     sx={{
//         textdecoration: "none",
//         color: "#151922",
//         mb: 1,
//     }}
// ></Link>;
