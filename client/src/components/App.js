// import "../style.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./Home";
import Login from "./Login";
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
            <div>
                <h1>Alman Online first page</h1>
                <Route path="/addnews">
                    {user.id ? <AddNews user={user} /> : <Login />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;
