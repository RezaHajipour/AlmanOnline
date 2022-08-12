import { Typography, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";

export default function CopyRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.copyRight}>
                <Typography component="span" gutterBottom>
                    Copyright &copy; Alman Online {new Date().getFullYear()}
                </Typography>
            </Box>

            <p>
                Design by @{" "}
                <a
                    href="https://www.rezahajipour.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.designed}
                >
                    REZA HAJIPOUR
                </a>
            </p>
        </div>
    );
}

//----------------Material-ui Styles----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
    copyRight: {
        textAlign: "center",
        "&::before": {
            content: '" "',
            width: "90%",
            height: "1px",
            margin: "0,5rem auto 1rem auto",
            backgroundColor: "#ffffff",
            display: "block",
        },
    },
    designed: {
        underline: "none",
        color: "#757ce8",
        textDecoration: "none",
        "&:hover": {
            underline: "none",
            color: "black",
            textDecoration: "none",
        },
    },
}));
