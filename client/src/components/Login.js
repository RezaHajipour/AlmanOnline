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
// import Alert from "@mui/material/Alert";

function Login() {
    const classes = useStyles();

    const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            if (result.error) {
                setIsError(result.error);
                return;
            }
            history.push("/login");
            window.location.href = "/addnews";
        } catch (error) {
            console.log(error);
        }
    };

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
                            // required
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
                            // required
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
                                backgroundColor: "#dc503c",
                                mb: 4,
                            }}
                        >
                            Login
                        </Button>
                        {isError && <p>{isError}</p>}
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
        border: "2px solid #dc503c",
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
}));
