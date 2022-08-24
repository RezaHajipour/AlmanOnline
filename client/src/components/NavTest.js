import { useState } from "react";
// IMPORTING APIS
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon,
} from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// REACT APP IMPORTS
import Home from "./Home";

// LOCAL-STYLING
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const NavTest = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <BrowserRouter>
                    <AppBar>
                        <Toolbar>
                            <Typography
                                variant="h5"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                            >
                                Murali
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="textPrimary"
                                        className={classes.menuButton}
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchor}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        KeepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/"
                                        >
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6">
                                                {" "}
                                                Home
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/College"
                                        >
                                            <ListItemIcon>
                                                <SchoolIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6">
                                                {" "}
                                                College{" "}
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/About"
                                        >
                                            <ListItemIcon>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6">
                                                {" "}
                                                About
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/Personal"
                                        >
                                            <ListItemIcon>
                                                <BookmarkIcon />
                                            </ListItemIcon>
                                            <Typography variant="h6">
                                                {" "}
                                                Personal{" "}
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem" }}>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/"
                                        color="default"
                                    >
                                        <HomeIcon />
                                        Home
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/College"
                                        color="default"
                                    >
                                        <SchoolIcon />
                                        College
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/About"
                                        color="default"
                                    >
                                        <PersonIcon />
                                        About
                                    </Button>
                                    <Button
                                        variant="text"
                                        component={Link}
                                        to="/Personal"
                                        color="default"
                                    >
                                        <BookmarkIcon />
                                        Personal
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default NavTest;
