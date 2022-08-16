import "../styles/AddNews.css";
import { useState } from "react";

import { Button, TextField, Typography, Container, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";

function AddNews() {
    const [formData, setFormData] = useState([]);
    const classes = useStyles();

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/addnews", {
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
        <Container
            maxWidth="xl"
            sx={{ display: "flex" }}
            className={classes.container}
        >
            <form
                action="/upload"
                method="POST"
                encType="multipart/form-data"
                onSubmit={onSubmit}
                className={classes.form}
            >
                <TextField
                    className={classes.input}
                    id="filled-basic"
                    variant="filled"
                    label="News Title"
                    name="title"
                    onInput={onInput}
                />
                <TextField
                    className={classes.input}
                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    variant="filled"
                    label="News description"
                    name="description"
                    onInput={onInput}
                />
                <TextField
                    className={classes.input}
                    id="filled-basic"
                    variant="filled"
                    label="News category"
                    name="category"
                    onInput={onInput}
                />
                <TextField
                    className={classes.input}
                    id="filled-basic"
                    variant="filled"
                    label="News location"
                    name="location"
                    onInput={onInput}
                />
                <Button
                    sx={{
                        mt: 2,
                    }}
                    variant="outlined"
                    component="label"
                >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Button
                    sx={{
                        width: "50%",
                        backgroundColor: "#dc503c",
                        mt: 2,
                        mb: 4,
                    }}
                    variant="contained"
                    fullWidth
                    type="submit"
                    onSubmit={onSubmit}
                >
                    Add News
                </Button>
            </form>
        </Container>
    );
}

export default AddNews;

const useStyles = makeStyles(() => ({
    container: {
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    form: {
        width: "80vw",
        height: "80vh",

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

///-----------------

// function AddNews() {
//     const [formData, setFormData] = useState([]);
//     const classes = useStyles();

//     function onSubmit(event) {
//         event.preventDefault();
//         fetch("/api/addnews", {
//             method: "POST",
//             body: JSON.stringify(formData),
//             headers: { "Content-Type": "application/json" },
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 // console.log("data inside addnews form is", data);
//                 if (data.error) {
//                     setFormData({ error: data.error });
//                     return;
//                 }
//                 window.location.href = "/addnews";
//             });
//     }

//     function onInput(event) {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         });
//     }

//     return (
//         <Container maxWidth="xl" className={classes.container}>
//             <Box
//                 className={classes.wrapper}
//                 component="form"
//                 sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "80vw" }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <form
//                     action="/upload"
//                     method="POST"
//                     encType="multipart/form-data"
//                     onSubmit={onSubmit}
//                     className={classes.form}
//                 >
//                     <h1> Please write your news in this form</h1>

//                     <p>
//                         News Title
//                         <input
//                             type="text"
//                             name="title"
//                             placeholder="Write Title of news"
//                             className="AddNews-input "
//                             onInput={onInput}
//                             required
//                         />
//                     </p>

//                     <p>
//                         News Category
//                         <input
//                             type="text"
//                             name="category"
//                             onInput={onInput}
//                             placeholder="Choose Category"
//                             className="AddNews-input "
//                             list="list-id"
//                         ></input>
//                         <datalist id="list-id">
//                             <option value="culture" />
//                             <option value="politics" />
//                             <option value="health" />
//                             <option value="immigration" />
//                             <option value=" economics" />
//                             <option value="sport" />
//                         </datalist>
//                     </p>
//                     <p>
//                         News Location
//                         <input
//                             type="text"
//                             name="location"
//                             placeholder="write name of city"
//                             className="AddNews-input "
//                             onInput={onInput}
//                         />
//                     </p>
//                     <p>
//                         News Description
//                         <textarea
//                             type="text"
//                             name="description"
//                             placeholder="write news text here"
//                             className="AddNews-textarea"
//                             onInput={onInput}
//                             required
//                         />
//                     </p>
//                     <br />
//                     <p>
//                         News Images
//                         <input
//                             type="file"
//                             accept="image/*"
//                             name="singleNewsImage"
//                         />
//                     </p>
//                     <br />
//                     <button type="submit" className="AddNews-btn">
//                         Add News
//                     </button>

//                     <TextField
//                         className={classes.input}
//                         id="filled-basic"
//                         variant="filled"
//                         label="News Title"
//                         name="title"
//                         onInput={onInput}
//                     />
//                     <TextField
//                         className={classes.input}
//                         id="outlined-multiline-static"
//                         multiline
//                         rows={8}
//                         variant="filled"
//                         label="News description"
//                         name="description"
//                     />
//                     <TextField
//                         className={classes.input}
//                         id="filled-basic"
//                         variant="filled"
//                         label="News category"
//                         name="category"
//                         onInput={onInput}
//                     />
//                     <TextField
//                         id="filled-basic"
//                         variant="filled"
//                         className={classes.input}
//                         label="News location"
//                         name="location"
//                         onInput={onInput}
//                     />
//                 </form>

//                 <form
//                     action="/upload"
//                     method="POST"
//                     encType="multipart/form-data"
//                 >
//                     <input
//                         type="file"
//                         accept="image/*"
//                         name="singleNewsImage"
//                     />
//                     <button type="submit" className="AddNews-btn"></button>
//                 </form>
//             </Box>
//         </Container>
//     );
// }
