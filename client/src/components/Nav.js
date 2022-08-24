import "../styles/Nav.css";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { makeStyles } from "@mui/styles";
import { NavLink as RouterLink } from "react-router-dom";

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
        <AppBar position="sticky" sx={{ background: " #e1e1e1" }}>
            <Toolbar disableGutters>
                <AdbIcon
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            color: "#dc503c",
                        },
                        mr: 1,
                    }}
                />

                <Typography
                    className={classes.logo}
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: {
                            xs: "none",
                            md: "flex",
                            color: "#dc503c",
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
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Alman Online (m)
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
    );
};

export default Nav;

const useStyles = makeStyles(() => ({
    root: {
        background: " #e1e1e1",
        color: "#151922",
    },

    link: { textDecoration: "none", color: "#151922" },
}));
