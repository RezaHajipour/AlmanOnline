import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminUsers from "./AdminUsers";
// import AdminNews from "./AdminNews";
import AddNews from "../news/AddNews";

import AdminGermanInfo from "./AdminGermanInfo";
import AdminVideos from "./AdminVideos";
import AdminEducation from "./AdminEducation";
import AdminImmigration from "./AdminImmigration";
import AdminEvents from "./AdminEvents";

const Admin = () => {
    return (
        <div>
            <Dashboard />
            <Route exact path="/admin/users" component={AdminUsers} />
            <Route exact path="/add/news" component={AddNews} />
            <Route exact path="/admin/germaninfo" component={AdminGermanInfo} />
            <Route exact path="/admin/videos" component={AdminVideos} />
            <Route exact path="/admin/education" component={AdminEducation} />
            <Route
                exact
                path="/admin/immigration"
                component={AdminImmigration}
            />
            <Route exact path="/admin/events" component={AdminEvents} />
        </div>
    );
};
export default Admin;
