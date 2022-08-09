import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            sx={{ top: "auto", bottom: 0, color: "#e1e1e1" }}
        >
            <Container maxWidth="xl" className={classes.footerContainer}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    sx={{ p: 2, pb: 0 }}
                >
                    footer
                </Typography>
            </Container>
        </AppBar>
    );
};

export default Footer;

const useStyles = makeStyles(() => ({
    footerContainer: {
        height: "15vh",
        background: " #e1e1e1",
        color: "#151922",
    },
}));
