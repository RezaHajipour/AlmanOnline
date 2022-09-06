import { Route, Routes, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AllNews from "../components/news/AllNews";
import SingleNews from "../components/news/SingleNews";
import AllVideos from "../components/videos/AllVideos";
const UserLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Routes>
                <Route path="/news/:id" element={<SingleNews />} />
                <Route path="/videos" element={<AllVideos />} />
                <Route path="/news" element={<AllNews />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default UserLayout;
