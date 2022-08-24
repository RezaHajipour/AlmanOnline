import {
    List,
    ListItem,
    Drawer,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withRouter } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideocamIcon from "@mui/icons-material/Videocam";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
import ParaglidingIcon from "@mui/icons-material/Paragliding";

const useStyles = makeStyles({
    drawer: {
        width: "160px",
    },
});

const Admin = (props) => {
    const { history } = props;
    const classes = useStyles();

    const itemslist = [
        {
            text: "users",
            icon: <PeopleIcon />,
            onclick: () => history.push("/adminusers"),
        },
        {
            text: "News",
            icon: <NewspaperIcon />,
            onclick: () => history.push("/adminnews"),
        },
        {
            text: "German Info",
            icon: <DescriptionIcon />,
            onclick: () => history.push("/admingermaninfo"),
        },
        {
            text: "Videos",
            icon: <VideocamIcon />,
            onclick: () => history.push("/adminvideos"),
        },
        {
            text: "Education",
            icon: <SchoolIcon />,
            onclick: () => history.push("/admineducation"),
        },
        {
            text: "Imigration",
            icon: <ParaglidingIcon />,
            onclick: () => history.push("/adminimmigration"),
        },
        {
            text: "Events",
            icon: <EventIcon />,
            onclick: () => history.push("/adminevents"),
        },
    ];
    return (
        <Drawer variant="permanent" className={classes.drawer}>
            <List>
                {itemslist.map((item, index) => {
                    const { text, icon, onclick } = item;
                    return (
                        <ListItem button key={text} onClick={onclick}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
};
export default withRouter(Admin);
