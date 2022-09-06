import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../components/Dashboard/Users";
import AddNews from "../components/news/AddNews";
import GermanInfo from "../components/Dashboard/GermanInfo";
import Videos from "../components/Dashboard/Videos";
import Education from "../components/Dashboard/Education";
import Immigration from "../components/Dashboard/Immigration";
import Events from "../components/Dashboard/Events";
import Logout from "../components/Logout";

const AdminLayout = () => {
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
export default AdminLayout;
