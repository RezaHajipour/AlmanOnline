import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {
    Container,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";

const SingleNews = () => {
    let { id } = useParams();
    // console.log("id", id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [news_picture_url, setNews_picture_url] = useState("");
    const [created_at, setCreated_at] = useState();

    useEffect(() => {
        const getSingleNews = async () => {
            const { data } = await axios.get(`/api/news/${id}`);
            setTitle(data.title);
            setDescription(data.description);
            setCategory(data.category);
            setLocation(data.location);
            setNews_picture_url(data["news_picture_url"]);
            setCreated_at(data["created_at"]);
        };
        getSingleNews();
    }, []);
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            <Card
                variant="string"
                dir="rtl"
                sx={{ width: "70vw", height: "100vh", mt: 2, mb: 2, mr: 4 }}
            >
                <CardContent sx={{ mt: 2 }}>
                    <Typography gutterBottom variant="h6" component="h2">
                        {title}
                    </Typography>
                </CardContent>

                <CardMedia
                    component="img"
                    alt="news image"
                    height="350"
                    sx={{
                        padding: "1em 1em 0 1em",
                        objectFit: "contain",
                    }}
                    image={news_picture_url}
                />

                <CardContent>
                    <Typography variant="body2" component="p">
                        Published on <span></span>
                        <time>{new Date(created_at).toLocaleDateString()}</time>
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                        برچسب ها : {category} {location}
                    </Typography>
                </CardContent>

                <Button
                    variant="outlined"
                    size="medium"
                    sx={{ mb: 4, mr: 2 }}
                    component="a"
                    href="/news"
                >
                    تیتر همه خبرها
                </Button>
            </Card>
        </Container>
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
