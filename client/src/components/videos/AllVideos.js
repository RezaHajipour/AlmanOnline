import "../../styles/Home.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

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
            <h2 className="newsTitle"> ویدیوها</h2>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 1, md: 2 }}
                sx={{ width: "80vw", mr: 0, mb: 1 }}
            >
                {!allVideos ? (
                    <p>loading...</p>
                ) : (
                    allVideos.map((video) => (
                        <Grid item key={video.id} sx={{ mt: 2 }}>
                            <ReactPlayer
                                controls
                                url={video.video_url}
                                width="250px"
                                height="200px"
                            />
                            <p>{video.title}</p>
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default AllVideos;
