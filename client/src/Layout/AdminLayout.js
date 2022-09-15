import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

const AdminLayout = () => {
    return (
        <div>
            <Dashboard />
            <Outlet />
            <Routes>
                <Route path="" element={<Dashboard />} />
            </Routes>
        </div>
    );
};
export default AdminLayout;
