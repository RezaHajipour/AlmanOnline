import "../styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import News from "./News";
import AddNews from "./AddNews";

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
            <Nav />
            <div className="AppContainer">
                <h1 className="appTitle">Alman Online first page</h1>
                <Route path="/addnews">
                    {user.id ? <AddNews user={user} /> : <Login />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;
