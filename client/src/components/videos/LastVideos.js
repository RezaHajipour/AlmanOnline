import "../../styles/Home.css";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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
        <div className="videoContainer">
            {!lastVideos ? (
                <p>loading...</p>
            ) : (
                lastVideos.map((lastvideo) => (
                    <div key={lastvideo.id}>
                        <ReactPlayer
                            controls
                            url={lastvideo.video_url}
                            width="250px"
                            height="200px"
                        />
                        <p>{lastvideo.title}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default LastVideos;
