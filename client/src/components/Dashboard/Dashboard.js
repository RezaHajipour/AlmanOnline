import Logout from "../Logout";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
    List,
    ListItem,
    Drawer,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideocamIcon from "@mui/icons-material/Videocam";
import SchoolIcon from "@mui/icons-material/School";
import EventIcon from "@mui/icons-material/Event";
import DescriptionIcon from "@mui/icons-material/Description";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";

const menuItems = [
    {
        text: "Home",
        icon: <HomeIcon color="secondary" />,
        path: "/admin",
        // onclick: () => history.push("/adminusers"),
    },
    {
        text: "users",
        icon: <PeopleIcon color="secondary" />,
        path: "/admin/users",
        // onclick: () => history.push("/adminusers"),
    },
    {
        text: "News",
        icon: <NewspaperIcon color="secondary" />,
        path: "/admin/news",
        // onclick: () => history.push("/addnews"),
    },
    {
        text: "German Info",
        icon: <DescriptionIcon color="secondary" />,
        path: "/admin/germaninfo",
        // onclick: () => history.push("/admingermaninfo"),
    },
    {
        text: "Videos",
        icon: <VideocamIcon color="secondary" />,
        path: "/admin/videos",
        // onclick: () => history.push("/adminvideos"),
    },
    {
        text: "Education",
        icon: <SchoolIcon color="secondary" />,
        path: "/admin/education",
        // onclick: () => history.push("/admineducation"),
    },
    {
        text: "Imigration",
        icon: <ParaglidingIcon color="secondary" />,
        path: "/admin/immigration",
        // onclick: () => history.push("/adminimmigration"),
    },
    {
        text: "Events",
        icon: <EventIcon color="secondary" />,
        path: "/admin/events",
        // onclick: () => history.push("/adminevents"),
    },
];
const Dashboard = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box sx={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                    <ListItem button>
                        <ListItemIcon>
                            <LogoutIcon color="primary" />
                        </ListItemIcon>
                        <Logout />{" "}
                    </ListItem>
                </List>
            </Drawer>
            <div>{children}</div>
        </Box>
    );
};
export default withRouter(Dashboard);

const drawerWidth = 200;
const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
});
//    const itemslist = [
//        {
//            text: "users",
//            icon: <PeopleIcon />,
//            onclick: () => history.push("/adminusers"),
//        },
//        {
//            text: "News",
//            icon: <NewspaperIcon />,
//            onclick: () => history.push("/addnews"),
//        },
//        {
//            text: "German Info",
//            icon: <DescriptionIcon />,
//            onclick: () => history.push("/admingermaninfo"),
//        },
//        {
//            text: "Videos",
//            icon: <VideocamIcon />,
//            onclick: () => history.push("/adminvideos"),
//        },
//        {
//            text: "Education",
//            icon: <SchoolIcon />,
//            onclick: () => history.push("/admineducation"),
//        },
//        {
//            text: "Imigration",
//            icon: <ParaglidingIcon />,
//            onclick: () => history.push("/adminimmigration"),
//        },
//        {
//            text: "Events",
//            icon: <EventIcon />,
//            onclick: () => history.push("/adminevents"),
//        },
//    ];
// <Drawer variant="permanent" className={classes.drawer}>
//     <List>
//         {itemslist.map((item, index) => {
//             const { text, icon, onclick } = item;
//             return (
//                 <ListItem button key={text} onClick={onclick}>
//                     <ListItemIcon>{icon}</ListItemIcon>
//                     <ListItemText primary={text} />
//                 </ListItem>
//             );
//         })}
//         <Logout />
//     </List>
// </Drawer>;

//    <Box sx={{ display: "flex" }}>
//             <Drawer
//                 variant="permanent"
//                 className={classes.drawer}
//                 classes={{ paper: classes.drawerPaper }}
//                 anchor="left"
//             >
//                 <List>
//                     <ListItem button component={Link} to="/admin">
//                         <ListItemIcon>
//                             <HomeIcon color="secondary" />
//                         </ListItemIcon>
//                         Home
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/users">
//                         <ListItemIcon>
//                             <PeopleIcon color="secondary" />
//                         </ListItemIcon>
//                         Users
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/news">
//                         <ListItemIcon>
//                             <NewspaperIcon color="secondary" />
//                         </ListItemIcon>
//                         News
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/germaninfo">
//                         <ListItemIcon>
//                             <DescriptionIcon color="secondary" />
//                         </ListItemIcon>
//                         German Info
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/videos">
//                         <ListItemIcon>
//                             <VideocamIcon color="secondary" />
//                         </ListItemIcon>
//                         Videos
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/education">
//                         <ListItemIcon>
//                             <SchoolIcon color="secondary" />
//                         </ListItemIcon>
//                         Education
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/immigration">
//                         <ListItemIcon>
//                             <ParaglidingIcon color="secondary" />
//                         </ListItemIcon>
//                         Imigration
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/events">
//                         <ListItemIcon>
//                             <EventIcon color="secondary" />
//                         </ListItemIcon>
//                         Events
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon>
//                             <LogoutIcon color="primary" />
//                         </ListItemIcon>
//                         <Logout />
//                     </ListItem>
//                 </List>
//             </Drawer>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
//             >
//                 <Toolbar />
//                 <Typography paragraph>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Rhoncus dolor purus non enim praesent elementum
//                     facilisis leo vel. Risus at ultrices mi tempus imperdiet.
//                     Semper risus in hendrerit gravida rutrum quisque non tellus.
//                     Convallis convallis tellus id interdum velit laoreet id
//                     donec ultrices. Odio morbi quis commodo odio aenean sed
//                     adipiscing. Amet nisl suscipit adipiscing bibendum est
//                     ultricies integer quis. Cursus euismod quis viverra nibh
//                     cras. Metus vulputate eu scelerisque felis imperdiet proin
//                     fermentum leo. Mauris commodo quis imperdiet massa
//                     tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
//                     At augue eget arcu dictum varius duis at consectetur lorem.
//                     Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//                     sapien faucibus et molestie ac.
//                 </Typography>
//             </Box>
//         </Box>
//     );
