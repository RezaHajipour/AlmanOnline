import "../../styles/Videos.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const LastVideos = () => {
    const [lastVideos, setLastvideos] = useState([]);
    console.log("last videos", lastVideos);

    useEffect(() => {
        fetch("/api/lastvideos", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setLastvideos(data);
            });
    }, []);
    return (
        <div className="lastVideoContainer">
            {!lastVideos ? (
                <p>loading...</p>
            ) : (
                lastVideos.map((lastvideo) => (
                    <div key={lastvideo.id}>
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
                                url={lastvideo.video_url}
                                width="250px"
                                height="200px"
                            />
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "right" }}
                            >
                                {lastvideo.title}
                            </Typography>
                        </Box>
                    </div>
                ))
            )}
        </div>
    );
};

export default LastVideos;
