import "../../styles/AddNews.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddNews() {
    const [formData, setFormData] = useState([]);

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/news", {
            method: "POST",
            body: new FormData(event.target),
        })
            .catch((error) => console.log("error on fetch upload", error))
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setFormData({ error: data.error });
                    return;
                }
                window.location.href = "/";
            });
    }

    return (
        <section className="addNewsContainer">
            <h1 className="AddNewsTitle">Add News</h1>
            <form className="AddNews-form" onSubmit={onSubmit}>
                <label className="addNewsLabel">
                    News Title
                    <input
                        placeholder="Write Title of News"
                        className="AddNews-input"
                        type="text"
                        name="title"
                    />
                </label>
                <label className="addNewsLabel">
                    News Description
                    <textarea
                        placeholder="Write News Description here"
                        className="AddNews-textarea "
                        type="text"
                        name="description"
                    />
                </label>
                <label className="addNewsLabel">
                    News Category
                    <input
                        placeholder="News is classified in which category?"
                        className="AddNews-input"
                        type="text"
                        name="category"
                    />
                </label>
                <label className="addNewsLabel">
                    News Location
                    <input
                        placeholder="News happened in which city or country?"
                        className="AddNews-input"
                        type="text"
                        name="location"
                    />
                </label>
                <label className="addNewsLabel">
                    News Picture
                    <input
                        className="AddNews-input"
                        type="file"
                        accept="image/*"
                        name="image"
                    />
                </label>
                <button className="AddNews-btn">send</button>
            </form>

            <Link to="/admin">Go back to Admin page</Link>
        </section>
    );
}
export default AddNews;
