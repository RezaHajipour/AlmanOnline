import { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/Login.css";

import {
    Button,
    TextField,
    Typography,
    Container,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function Login() {
    const classes = useStyles();

    const [formData, setFormData] = useState({});

    function onSubmit(event) {
        event.preventDefault();
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
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
        <section className={classes.container}>
            <Container className={classes.wrapper} maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        LOGIN
                    </Typography>

                    <form className={classes.form} onSubmit={onSubmit}>
                        <TextField
                            className={classes.input}
                            variant="filled"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onInput={onInput}
                        />
                        <TextField
                            className={classes.input}
                            variant="filled"
                            margin="normal"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            fullWidth
                            onInput={onInput}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Remember me"
                            className={classes.checkbox}
                        />
                        <Button
                            onSubmit={onSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#f4c430",
                                mb: 4,
                            }}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
}

export default Login;

const useStyles = makeStyles(() => ({
    container: {
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        backgroundColor: "#e1e1e1",
        color: "#333",
        borderRadius: 16,
        height: "40vh",
        border: "2px solid #f4c430",
        "& a:hover": {
            textDecoration: "none",
        },
    },
    paper: {
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    form: {
        width: "100%",
        marginTop: 1,
    },
    input: {
        backgroundColor: "#ffffff",
        borderRadius: 6,
        "&:hover": {
            color: "#f4c430",
        },
        "&:focus": {
            color: "red",
        },
    },

    // checkbox: {
    //     color: "#fff",
    //     "& span": {
    //         color: "#fff",
    //     },
    // },
}));

///------ old version which works properly-------
//******************************************** */

// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import useTitle from "../hooks/useTitle.js";
// import "../styles/Login.css";

// function Login() {
//     const [formData, setFormData] = useState({});
//     // useTitle("Login");

//     function onSubmit(event) {
//         event.preventDefault();
//         fetch("/api/login", {
//             method: "POST",
//             body: JSON.stringify(formData),
//             headers: { "Content-Type": "application/json" },
//         })
//             .then((response) => response.json())
//             .then((data) => {
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
//         <section className="mainContainer">
//             <div className="loginContainer">
//                 <form onSubmit={onSubmit} className="loginForm">
//                     <h2 className="loginTitle">Login</h2>

//                     <ul className="loginUl">
//                         <li>
//                             <input
//                                 className="loginInput"
//                                 type="email"
//                                 name="email"
//                                 required
//                                 placeholder="Email"
//                                 onInput={onInput}
//                             />
//                         </li>
//                         <li>
//                             <input
//                                 className="loginInput"
//                                 type="password"
//                                 name="password"
//                                 required
//                                 placeholder="Password"
//                                 onInput={onInput}
//                             />
//                         </li>
//                         <li>
//                             <button type="submit" className="loginBtn">
//                                 LOGIN
//                             </button>
//                         </li>
//                     </ul>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default Login;
