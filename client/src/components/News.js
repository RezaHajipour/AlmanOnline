// import "../styles/News.css";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Unstable_Grid2";

const News = () => {
    const [allnews, setAllNews] = useState([]);
    console.log("allnews", allnews);

    useEffect(() => {
        fetch("/api/news").then((res) =>
            res.json().then((data) => setAllNews(data))
        );
    }, []);

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {!allnews ? (
                <p>loading...</p>
            ) : (
                allnews.map((news, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <NewsCard news={news} />
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default News;

// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

// const News = () => {
//     const [allnews, setAllNews] = useState([]);
//     console.log("allnews", allnews);

//     useEffect(() => {
//         fetch("/api/news").then((res) =>
//             res.json().then((data) => setAllNews(data))
//         );
//     }, []);

//     return (
//         <Container maxWidth="80%">
//             <ImageList cols={3} rowHeight={300} sx={{ mt: 1 }}>
//                 {!allnews ? (
//                     <p>loading...</p>
//                 ) : (
//                     allnews.map((news, index) => (
//                         <ImageListItem key={index}>
//                             <NewsCard news={news} />
//                         </ImageListItem>
//                     ))
//                 )}
//             </ImageList>
//         </Container>
//     );
// };

//----------------

// const News = () => {
//     const [allnews, setAllNews] = useState([]);
//     console.log("allnews", allnews);

//     useEffect(() => {
//         fetch("/api/news").then((res) =>
//             res.json().then((data) => setAllNews(data))
//         );
//     }, []);

//     return (
//         <section className="newsContainer">
//             {!allnews ? (
//                 <p>loading...</p>
//             ) : (
//                 <ul className="newsUl">
//                     {allnews.map((news, index) => (
//                         <li key={index} className="newsLi">
//                             <NewsCard news={news} />
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </section>
//     );
// };
