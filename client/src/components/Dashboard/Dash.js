import { Route } from "react-router-dom";
import Admin from "./Admin";
import AdminUsers from "./AdminUsers";
import AdminNews from "./AdminNews";
import AdminGermanInfo from "./AdminGermanInfo";
import AdminVideos from "./AdminVideos";
import AdminEducation from "./AdminEducation";
import AdminImmigration from "./AdminImmigration";
import AdminEvents from "./AdminEvents";

const Dash = () => {
    return (
        <div>
            <Admin />

            <Route exact path="/adminusers" component={AdminUsers} />
            <Route exact path="/adminnews" component={AdminNews} />
            <Route exact path="/admingermaninfo" component={AdminGermanInfo} />
            <Route exact path="/adminvideos" component={AdminVideos} />
            <Route exact path="/admineducation" component={AdminEducation} />
            <Route
                exact
                path="/adminimmigration"
                component={AdminImmigration}
            />
            <Route exact path="/adminevents" component={AdminEvents} />
        </div>
    );
};
export default Dash;
