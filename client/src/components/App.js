import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import UserLayout from "../Layout/UserLayout";
import PageNotFound from "./PageNotFound";
import Login from "./Login";

import Users from "../components/Dashboard/Users";
import AddNews from "../components/news/AddNews";
import GermanInfo from "../components/Dashboard/GermanInfo";
import Videos from "../components/Dashboard/Videos";
import Education from "../components/Dashboard/Education";
import Immigration from "../components/Dashboard/Immigration";
import Events from "../components/Dashboard/Events";
import Logout from "./Logout";
import Home from "./Home";
import AllNews from "./news/AllNews";
import SingleNews from "./news/SingleNews";
import AllVideos from "./videos/AllVideos";

const App = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    console.log("user", user);
    // console.log("process dot env in front", process.env.PORT);
    useEffect(() => {
        fetch("/api/users/me")
            .then((res) => res.json())
            .then((user) => {
                if (!user) {
                    return;
                }
                setUser(user);
            });
    }, []);

    return (
        <div className="AppContainer">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="admin" element={<AdminLayout user={user} />}>
                    <Route path="users" element={<Users />} />
                    <Route path="news" element={<AddNews />} />
                    <Route path="germanInfo" element={<GermanInfo />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="education" element={<Education />} />
                    <Route path="immigration" element={<Immigration />} />
                    <Route path="events" element={<Events />} />
                    <Route path="logout" element={<Logout />} />
                </Route>

                <Route path="/" element={<UserLayout />}>
                    <Route path="news/:id" element={<SingleNews />} />
                    <Route path="videos" element={<AllVideos />} />
                    <Route path="news" element={<AllNews />} />
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default App;
