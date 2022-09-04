import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    Typography,
    Toolbar,
    ListItem,
    List,
    IconButton,
    Hidden,
    Drawer,
    CssBaseline,
    AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// import { makeStyles } from "@mui/styles";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import reza7 from "../../images/reza7.png";

const Dash = (props) => {
    const { window } = props;
    // const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div />

            <br />
            <h1>REZA HAJIPOUR</h1>
            <h4>Frontend Web Developer</h4>

            <List>
                <ListItem button component={Link} to="/">
                    Home
                </ListItem>
                <ListItem button component={Link} to="/about">
                    About
                </ListItem>
                <ListItem button component={Link} to="/works">
                    Works
                </ListItem>
                <ListItem button component={Link} to="/Skills">
                    Skills
                </ListItem>
                <ListItem button component={Link} to="/Contact">
                    Contact
                </ListItem>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Reza Hajipour
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        // anchor={direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer variant="permanent" open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
      </main> */}
        </div>
    );
};

Dash.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dash;

// const drawerWidth = 240;

// const useStyles = makeStyles(() => ({
//     root: {
//         display: "flex",
//         // backgroundColor: "#2d3748",
//     },
//     drawer: {
//         [theme.breakpoints.up("sm")]: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//     },
//     appBar: {
//         [theme.breakpoints.up("sm")]: {
//             display: "none",
//             width: `calc(100% - ${drawerWidth}px)`,
//             marginLeft: drawerWidth,
//         },
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up("sm")]: {
//             display: "none",
//         },
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//         width: drawerWidth,
//         backgroundColor: "#dee2e6",
//         color: "6b6c6b",
//         display: "flex",
//         alignItems: "center",
//     },
//     menuText: {
//         fontSize: 18,
//         fontWeight: "bold",
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
//     smallMenuTop: {
//         backgroundColor: "#dee2e6",
//         color: "black",
//     },
// }));
