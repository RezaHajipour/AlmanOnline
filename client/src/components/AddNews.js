import "../styles/AddNews.css";
import { useState } from "react";

function AddNews(user) {
    console.log("user", user);
    const [formData, setFormData] = useState({});

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/news", {
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
                window.location.href = "/addnews";
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
                <h1> Please write your news in this form</h1>

                <p>
                    News Title
                    <input
                        type="text"
                        name="title"
                        placeholder="Write Title of news"
                        className="AddNews-input "
                        onInput={onInput}
                    />
                </p>
                <p>
                    News Category
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
                    News Location
                    <input
                        type="text"
                        name="location"
                        placeholder="write name of city"
                        className="AddNews-input "
                        onInput={onInput}
                    />
                </p>
                <p>
                    News Description
                    <textarea
                        type="text"
                        name="description"
                        placeholder="write news text here"
                        className="AddNews-textarea"
                        onInput={onInput}
                    />
                </p>
                <br />
                <p>
                    News Images
                    <input
                        type="file"
                        accept="image/*"
                        name="singleNewsImage"
                    />
                </p>
                <br />
                <button className="AddNews-btn">Add News</button>
            </form>
            <form action="/upload" method="POST" encType="multipart/form-data">
                <input type="file" accept="image/*" name="singleNewsImage" />

                <button type="submit" className="AddNews-btn"></button>
            </form>
        </div>
    );
}

export default AddNews;

//  <section>
//      {" "}
//      {!news ? (
//          <p>loading...</p>
//      ) : (
//          news.map((news, index) => <NewsCard key={index} news={news} />)
//      )}
//  </section>;
