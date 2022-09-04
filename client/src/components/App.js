import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import AllNews from "./news/AllNews";
import SingleNews from "./news/SingleNews";
import AllVideos from "./videos/AllVideos";
import Admin from "./Dashboard/Admin";
import PageNotFound from "./PageNotFound";
import AddNews from "./news/AddNews";
import Education from "./Dashboard/Education";
import Immigration from "./Dashboard/Immigration";

const App = () => {
    const [user, setUser] = useState([]);
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
            <Router>
                <Switch>
                    <Route exact path="/admin">
                        {user.id ? <Admin user={user} /> : <Login />}
                        <Route
                            exact
                            path="/admin/education"
                            component={Education}
                        />

                        <Route
                            exact
                            path="/admin/immigration"
                            component={Immigration}
                        />
                    </Route>
                    <Route exact path="/admin/news">
                        {user.id ? <AddNews user={user} /> : <Login />}
                    </Route>
                    <Route exact path="/admin/education">
                        {user.id ? <Education user={user} /> : <Login />}
                    </Route>
                    <Route exact path="/news/:id" component={SingleNews} />
                    <Route exact path="/videos" component={AllVideos} />
                    <Route exact path="/news" component={AllNews} />
                    <Route exact path="/" component={Home} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
