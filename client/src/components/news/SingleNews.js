// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleNews = () => {
    const { id } = useParams();
    console.log("id", id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    console.log("title", title);

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

    useEffect(() => {
        const getSingleNews = async () => {
            const { data } = await axios.get(`/api/news/${id}`);
            console.log("data is", data);
            setTitle(data.title);
            setDescription(data.description);
        };
        getSingleNews();
    }, []);
    return (
        <div>
            <h1>single news</h1>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default SingleNews;
