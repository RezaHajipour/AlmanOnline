import "../styles/Nav.css";
import { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
// import { MenuIcon, AdbIcon } from "@mui/icons-material";

const pages = [
    { title: "add video", link: "/addvideos" },
    { title: "add news", link: "/addnews" },
    { title: "جستجوی مشاغل", link: "/" },
    { title: "ایونتها", link: "/" },
    { title: "تحصیل", link: "/" },
    { title: "اقامت", link: "/" },
    { title: "ویدیو", link: "/videos" },
    { title: "اصلاعات عمومی آلمان", link: "/gerinfos" },
    { title: "اخبار", link: "/news" },
    { title: "صفحه اول", link: "/" },
];

const useStyles = makeStyles(() => ({
    header: {
        boxShadow: "0px 0px 0px",
    },

    link: { textDecoration: "none", color: "#0c0c0c" },
}));

const Nav = () => {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="container">
            <AppBar
                position="sticky"
                className={classes.header}
                sx={{ backgroundColor: "#92A1B3" }}
            >
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                                color: "#0c0c0c",
                            },
                            mr: 2,
                            ml: 5,
                        }}
                    />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex",
                                color: "#ffefc1",
                            },
                            fontFamily: "Noto Sans Arabic",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Alman Online
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: "block",
                                    md: "flex",
                                },
                            }}
                        >
                            {pages.map((page, pageInex) => (
                                <MenuItem
                                    key={pageInex}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            fontFamily: "Noto Sans Arabic",
                                            fontWeight: 400,
                                            color: "inherit",
                                        }}
                                    >
                                        <RouterLink
                                            to={page.link}
                                            activeClassName={classes.navLink}
                                            className={classes.link}
                                        >
                                            {page.title}
                                        </RouterLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "Noto Sans Arabic",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "#0c0c0c",
                            textDecoration: "none",
                        }}
                    >
                        Alman Online
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                                justifyContent: "flex-end",
                            },
                        }}
                    >
                        {pages.map((mobilepage, mobileKey) => (
                            <Button
                                key={mobileKey}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    fontFamily: "Noto Sans Arabic",
                                    fontWeight: 700,
                                    my: 2,
                                    color: "#f8f8f8",
                                    display: "block",
                                }}
                            >
                                <RouterLink
                                    to={mobilepage.link}
                                    activeClassName={classes.navLink}
                                    className={classes.link}
                                >
                                    {mobilepage.title}
                                </RouterLink>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
