import "../../styles/Home.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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
        <div className="videoContainer">
            {!allVideos ? (
                <p>loading...</p>
            ) : (
                allVideos.map((video) => (
                    <div key={video.id}>
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

export default AllVideos;
