import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../styles/Home.css";

const Videos = () => {
    const [allVideos, setAllvideos] = useState([]);

    useEffect(() => {
        fetch("/api/videos").then((res) =>
            res.json().then((data) => setAllvideos(data))
        );
    });
    return (
        <div className="videoContainer">
            {!allVideos ? (
                <p>loading...</p>
            ) : (
                allVideos.map((video, index) => (
                    <div key={index}>
                        <ReactPlayer
                            controls
                            url={video.video_url}
                            width="250px"
                            height="200px"
                        />
                        <p>{video.title}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Videos;
