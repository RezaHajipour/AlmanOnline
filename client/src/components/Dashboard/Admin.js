import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
// import AdminNews from "./AdminNews";
import AddNews from "../news/AddNews";
import GermanInfo from "./GermanInfo";
import Videos from "./Videos";
import Education from "./Education";
import Immigration from "./Immigration";
import Events from "./Events";

const Admin = ({ children }) => {
    return (
        <div>
            {children}
            <Dashboard />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/admin/news" component={AddNews} />
            <Route exact path="/admin/germaninfo" component={GermanInfo} />
            <Route exact path="/admin/videos" component={Videos} />
            <Route exact path="/admin/education" component={Education} />
            <Route exact path="/admin/immigration" component={Immigration} />
            <Route exact path="/admin/events" component={Events} />
        </div>
    );
};
export default Admin;
