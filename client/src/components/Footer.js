import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.root}>
                <Typography gutterBottom variant="h6" component="h4">
                    Alman Online
                </Typography>
            </Grid>
        </div>
    );
}

//----------------Material-ui Styles----------------------

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "flex-start",
        textAlign: "center",
        flexBasis: "0%",
        backgroundColor: "#e1e1e1",
        boxShadow: "0",
        width: "100%",
        height: "10vw",
    },
}));
