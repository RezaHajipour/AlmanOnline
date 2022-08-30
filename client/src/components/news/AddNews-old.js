import "../../styles/AddNews.css";
import { useState } from "react";

import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

function AddNews() {
    const [formData, setFormData] = useState([]);
    // const [upload, setUpload] = useState(null);
    const classes = useStyles();

    function onSubmit(event) {
        event.preventDefault();
        // const body = new FormData();
        // console.log("body", body);
        // body.append("image", upload);
        fetch("/api/news", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
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

    function onInput(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    // const handleUpload = (event) => {
    //     console.log("handleUpload", event.target.files[0]);
    //     setUpload(event.target.files[0]);
    // };
    return (
        <Container
            maxWidth="xl"
            sx={{ display: "flex" }}
            className={classes.container}
        >
            <section>
                <form
                    action="/api/news"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={onSubmit}
                >
                    <p>title</p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onInput={onInput}
                    />
                    <br />
                    <p>description</p>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        onInput={onInput}
                    />
                    <br />
                    <p>category</p>
                    <input type="text" name="category" onInput={onInput} />
                    <br />
                    <p>location</p>
                    <input type="text" name="location" onInput={onInput} />
                    <br />

                    <button type="submit">send</button>
                </form>
            </section>
            <section>
                <form
                    action="/api/news"
                    method="POST"
                    encType="multipart/form-data"
                >
                    <input type="file" accept="image/*" name="image" />
                    <button type="submit">upload image</button>
                </form>
            </section>
            <section>
                <h1>{formData.title}</h1>
                <p>{formData.description}</p>
                <p>{formData.category}</p>
                <p>{formData.location}</p>
                <p>{formData.news_picture_url}</p>
            </section>
        </Container>
    );
}
//  <input type="file" accept="image/*" name="singleImage" />;
// <button type="submit" disabled={!uploadedPicture}></button>
export default AddNews;

const useStyles = makeStyles(() => ({
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    form: {
        width: "80vw",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "right",
        direction: "rtl",
    },
    input: {
        backgroundColor: "#ffffff",
        width: "60vw",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
    },
}));
////--------------simple image upload to local works

// <form action="/upload" method="POST" encType="multipart/form-data">
//     <input type="file" accept="image/*" name="singleImage" />
//     <button type="submit">upload image</button>
// </form>;
///-----------------materia ul form which upload everything except image

//   <form
//       action="/upload"
//       method="POST"
//       encType="multipart/form-data"
//       onSubmit={onSubmit}
//       className={classes.form}
//   >
//       <TextField
//           className={classes.input}
//           id="filled-basic"
//           variant="filled"
//           label="News Title"
//           name="title"
//           onInput={onInput}
//       />
//       <TextField
//           className={classes.input}
//           id="outlined-multiline-static"
//           multiline
//           rows={6}
//           variant="filled"
//           label="News description"
//           name="description"
//           onInput={onInput}
//       />
//       <TextField
//           className={classes.input}
//           id="filled-basic"
//           variant="filled"
//           label="News category"
//           name="category"
//           onInput={onInput}
//       />
//       <TextField
//           className={classes.input}
//           id="filled-basic"
//           variant="filled"
//           label="News location"
//           name="location"
//           onInput={onInput}
//       />
//       <Button
//           sx={{
//               mt: 2,
//           }}
//           variant="outlined"
//           component="label"
//       >
//           Upload
//           <input hidden type="file" accept="image/*" name="singleImage" />
//       </Button>
//       <Button
//           sx={{
//               width: "50%",
//               backgroundColor: "#dc503c",
//               mt: 2,
//               mb: 4,
//           }}
//           variant="contained"
//           fullWidth
//           type="submit"
//       >
//           Add News
//       </Button>
//   </form>;

///-------------