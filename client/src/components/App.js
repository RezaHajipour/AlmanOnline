import "../styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CopyWrite from "./CopyRight";
import Home from "./Home";
import Login from "./Login";
import News from "./News";
import Videos from "./Videos";
import AddNews from "./AddNews";
import AddVideos from "./AddVideos";

const App = () => {
    const [user, setUser] = useState({});
    console.log("user", user);
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
        <BrowserRouter>
            <div className="AppContainer">
                <Nav />
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/addvideos">
                    {user.id ? <AddVideos user={user} /> : <Login />}
                </Route>
                <Route path="/addnews">
                    {user.id ? <AddNews user={user} /> : <Login />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/videos">
                    <Videos />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Footer />
                <CopyWrite />
            </div>
        </BrowserRouter>
    );
};

export default App;
