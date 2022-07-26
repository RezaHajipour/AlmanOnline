import { Box, MenuItem, Link, MenuList, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
    const classes = useStyle();

    return (
        <Grid
            container
            component="footer"
            className={classes.root}
            justify="center"
        >
            <Grid item xs={12} md={10} lg={8}>
                <Box
                    display="flex"
                    // py={3}
                    width="50%"
                    justifyContent="space-between"
                    className={classes.menuListBox}
                >
                    <MenuList>
                        <MenuItem>
                            <Link to="/" component={RouterLink}>
                                Register
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/" component={RouterLink}>
                                Contact
                            </Link>
                        </MenuItem>
                    </MenuList>
                    <MenuList>
                        <MenuItem>
                            <Link
                                to="/"
                                component={RouterLink}
                                className={classes.title}
                            >
                                About us
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link>Privacy</Link>
                        </MenuItem>
                    </MenuList>
                </Box>
                <Box className={classes.footerCopyright}>
                    <Typography component="span" gutterBottom>
                        Copyright &copy; Alman Online {new Date().getFullYear()}
                    </Typography>
                </Box>
                <br />
            </Grid>
        </Grid>
    );
};

export default Footer;

const useStyle = makeStyles(() => ({
    root: {
        width: "100%",
        height: "10vw",
        backgroundColor: "#232F37",
        color: "#ffffff",
        padding: "0 0",
        "& a": {
            color: "#ffffff",
        },
    },
    footerCopyright: {
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
}));
