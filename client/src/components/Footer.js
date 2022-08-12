import { Typography, Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export default function Footer() {
    const classes = useStyles();

    return (
        <div container className={classes.root}>
            <Box
                sx={{
                    width: 300,
                    height: 200,
                    backgroundColor: "#e1e1e1",
                }}
                className={classes.left}
            >
                ما را در شبکه های اجتماعی زیر دنبال کنید{" "}
                <Paper>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h4"
                    ></Typography>
                </Paper>
                <Paper
                    elevation={0}
                    className={classes.leftIcons}
                    sx={{ backgroundColor: "#e1e1e1" }}
                >
                    {" "}
                    <FacebookIcon sx={{ transform: "scale(1.5)" }} />
                    <YouTubeIcon sx={{ transform: "scale(1.9)" }} />
                    <TelegramIcon sx={{ transform: "scale(1.5)" }} />
                    <InstagramIcon sx={{ transform: "scale(1.5)" }} />
                    <MailIcon sx={{ transform: "scale(1.5)" }} />
                </Paper>
            </Box>
            <Box
                sx={{
                    width: 200,
                    height: 200,
                }}
                className={classes.middle}
            >
                {" "}
                <Typography gutterBottom variant="h6" component="h4">
                    شرایط استفاده
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    عضویت در خبرنامه
                </Typography>
            </Box>

            <Box
                sx={{
                    width: 200,
                    height: 200,
                }}
                className={classes.right}
            >
                {" "}
                <Typography gutterBottom variant="h6" component="h4">
                    درباره آلمان آن لاین
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    تبلیغ در آلمان آن لاین
                </Typography>
                <Typography gutterBottom variant="h6" component="h4">
                    تماس با آلمان آن لاین
                </Typography>
            </Box>
        </div>
    );
}

//----------------Material-ui Styles----------------------

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "row",
        flexBasis: "0%",
        backgroundColor: "#e1e1e1",
        boxShadow: "0",
        width: "100%",
        height: "10vw",
    },
    left: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: "20px",
    },
    leftIcons: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginTop: "20px",
    },
    right: {
        marginTop: "20px",
    },
}));
