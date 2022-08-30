import { useState } from "react";

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
        <section>
            <form onSubmit={onSubmit}>
                <label>
                    title
                    <input type="text" name="title" />
                </label>
                <label>
                    description
                    <input type="text" name="description" />
                </label>
                <label>
                    category
                    <input type="text" name="category" />
                </label>
                <label>
                    location
                    <input type="text" name="location" />
                </label>
                <label>
                    image
                    <input type="file" accept="image/*" name="image" />
                </label>
                <button>send</button>
            </form>
        </section>
    );
}
export default AddNews;
