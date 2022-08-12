import "../styles/AddVideos.css";
import { useState } from "react";

function AddVideos(user) {
    console.log("user", user);
    const [formData, setFormData] = useState({});

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/videos", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("data inside addnews form is", data);
                if (data.error) {
                    setFormData({ error: data.error });
                    return;
                }
                window.location.href = "/addvideos";
            });
    }

    function onInput(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div>
            <form
                action="/upload"
                method="POST"
                encType="multipart/form-data"
                onSubmit={onSubmit}
                className="AddNews-form"
            >
                <h1> Please fill the form for adding new video</h1>

                <p>
                    video Title
                    <input
                        type="text"
                        name="title"
                        placeholder="Write Title of video"
                        className="AddNews-input "
                        onInput={onInput}
                    />
                </p>
                <p>
                    videos Category
                    <input
                        type="text"
                        name="category"
                        onInput={onInput}
                        placeholder="Choose Category"
                        className="AddNews-input "
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
                </p>
                <p>
                    video Location
                    <input
                        type="text"
                        name="location"
                        placeholder="write name of city"
                        className="AddNews-input "
                        onInput={onInput}
                    />
                </p>
                <p>
                    video Description
                    <textarea
                        type="text"
                        name="description"
                        placeholder="write video description here"
                        className="AddNews-textarea"
                        onInput={onInput}
                    />
                </p>
                <br />
                <p>
                    video Link
                    <input type="url" name="singleNewsImage" required />
                </p>
                <br />
                <button className="AddNews-btn">Add video</button>
            </form>
        </div>
    );
}

export default AddVideos;
