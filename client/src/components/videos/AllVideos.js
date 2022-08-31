import "../../styles/Videos.css";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const AllVideos = () => {
    const [allVideos, setAllvideos] = useState([]);

    useEffect(() => {
        fetch("/api/videos", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setAllvideos(data);
            });
    }, []);
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <h2 className="AllVideosTitle"> ویدیوها</h2>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 1, md: 2 }}
                sx={{
                    width: "100%",
                    mr: 0,
                    mb: 0,
                }}
            >
                {!allVideos ? (
                    <p>loading...</p>
                ) : (
                    allVideos.map((video, index) => (
                        <Grid item key={index} sx={{ mt: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    m: 1,
                                    width: "250px",
                                    height: "250px",
                                }}
                            >
                                <ReactPlayer
                                    controls
                                    url={video.video_url}
                                    width="250px"
                                    height="200px"
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ textAlign: "right" }}
                                >
                                    {video.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default AllVideos;
