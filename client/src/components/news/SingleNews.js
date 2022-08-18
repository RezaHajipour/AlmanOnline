// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleNews = () => {
    let { id } = useParams();
    console.log("id", id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [news_picture_url, setNews_picture_url] = useState("");
    const [created_at, setCreated_at] = useState();

    useEffect(() => {
        const getSingleNews = async () => {
            const { data } = await axios.get(`/api/news/${id}`);
            console.log("data is", data);
            setTitle(data.title);
            console.log("title", title);
            setDescription(data.description);
            setCategory(data.category);
            setLocation(data.location);
            setNews_picture_url(data["news_picture_url"]);
            setCreated_at(data["created_at"]);
        };
        getSingleNews();
    }, []);
    return (
        <div>
            <h1>single news</h1>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{location}</p>
            <img src={news_picture_url} />
            <p>{created_at}</p>
        </div>
    );
};

export default SingleNews;

///fetch method

// useEffect(() => {
//     fetch(`/api/news/${id}`, {})
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             if (data.error_message) {
//                 console.log(data.error_message);
//                 history.replaceState("/");
//                 return;
//             }
//             setTitle(data.title);
//             setDescription(data.description);
//         });
// }, []);
