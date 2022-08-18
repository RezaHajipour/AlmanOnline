import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import CopyWrite from "./CopyRight";
import Home from "./Home";
import Login from "./Login";
import AllNews from "./news/AllNews";
import SingleNews from "./news/SingleNews";
import AddNews from "./news/AddNews";
import AllVideos from "./videos/AllVideos";
import AddVideos from "./videos/AddVideos";

const App = () => {
    const [user, setUser] = useState([]);
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
        <div className="AppContainer">
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/addvideos">
                    {user.id ? <AddVideos user={user} /> : <Login />}
                </Route>
                <Route exact path="/addnews">
                    {user.id ? <AddNews user={user} /> : <Login />}
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/videos">
                    <AllVideos />
                </Route>
                <Route exact path="/news">
                    <AllNews />
                </Route>
                <Route exact path="/news/:id">
                    <SingleNews />
                </Route>
            </Switch>
            <Footer />
            <CopyWrite />
        </div>
    );
};

export default App;
