import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
// import AdminNews from "./AdminNews";
import AddNews from "../news/AddNews";
import GermanInfo from "./GermanInfo";
import Videos from "./Videos";
import Education from "./Education";
import Immigration from "./Immigration";
import Events from "./Events";
import Logout from "../Logout";

const Admin = () => {
    return (
        <div>
            <Dashboard />
            <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="news" element={<AddNews />} />
                <Route path="users" element={<Users />} />
                <Route path="germanInfo" element={<GermanInfo />} />
                <Route path="videos" element={<Videos />} />
                <Route path="education" element={<Education />} />
                <Route path="immigration" element={<Immigration />} />
                <Route path="events" element={<Events />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </div>
    );
};
export default Admin;
