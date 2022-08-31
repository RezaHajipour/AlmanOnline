import "../../styles/AddVideos.css";
import { useState } from "react";

function AddVideos() {
    const [formData, setFormData] = useState([]);

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/videos", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("data inside addnews form is", data);
                if (data.error) {
                    setFormData({ error: data.error });
                    return;
                }
                window.location.href = "/";
            });
    }

    function onInput(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className="addVideosContainer">
            <h1 className="AddVideoTitle">ADD Videos</h1>
            <form method="POST" onSubmit={onSubmit} className="AddVideos-form">
                <h2 className="addVideosHeader">
                    {" "}
                    Please fill the form for adding new video
                </h2>
                <label className="addVideosLabel">
                    video Title
                    <input
                        type="text"
                        name="title"
                        placeholder="Write Title of video"
                        className="AddVideo-input"
                        onInput={onInput}
                    />
                </label>
                <label className="addVideosLabel">
                    video Category
                    <input
                        type="text"
                        name="category"
                        onInput={onInput}
                        placeholder="Choose Category"
                        className="AddVideo-input"
                        list="list-id"
                    ></input>
                    <datalist id="list-id">
                        <option value="culture" />
                        <option value="politics" />
                        <option value="health" />
                        <option value="immigration" />
                        <option value=" economics" />
                        <option value="sport" />
                    </datalist>
                </label>
                <label className="addVideosLabel">
                    video Location
                    <input
                        type="text"
                        name="location"
                        placeholder="write name of city"
                        className="AddVideo-input"
                        onInput={onInput}
                    />
                </label>
                <label className="addVideosLabel">
                    video Description
                    <textarea
                        type="text"
                        name="description"
                        placeholder="write video description here"
                        className="AddVideos-textarea"
                        onInput={onInput}
                    />
                </label>
                <br />
                <label className="addVideosLabel">
                    video Link
                    <input
                        className="AddVideo-url"
                        placeholder="write url or paste the link of video here"
                        type="url"
                        name="video_url"
                        required
                        onInput={onInput}
                    />
                </label>
                <br />
                <button className="AddVideos-btn">Add video</button>
            </form>
        </div>
    );
}

export default AddVideos;
