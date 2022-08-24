import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Nav";
// import NavTest from "./NavTest";
import Footer from "./Footer";
import CopyWrite from "./CopyRight";
import Home from "./Home";
import Login from "./Login";
import AllNews from "./news/AllNews";
import SingleNews from "./news/SingleNews";
import AllVideos from "./videos/AllVideos";
import AddVideos from "./videos/AddVideos";
import AddNews from "./news/AddNews";

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
            <Nav />
            <Switch>
                <Route exact path="/addvideos">
                    {user.id ? <AddVideos user={user} /> : <Login />}
                </Route>
                <Route exact path="/addnews">
                    {user.id ? <AddNews user={user} /> : <Login />}
                </Route>
                <Route exact path="/news/:id" component={SingleNews} />
                <Route exact path="/videos" component={AllVideos} />
                <Route exact path="/news" component={AllNews} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
            <CopyWrite />
        </div>
    );
};

export default App;

// <Switch>
// <Route exact path="/admin">
//     {user.id ? <Admin user={user} /> : <Login />}
// </Route>
//     <Route exact path="/adminNews">
//         <AdminNews />
//     </Route>

//     <div>
//         <Nav />
//         <Route exact path="/">
//             <Home />
//         </Route>
//         <Route exact path="/login">
//             <Login />
//         </Route>
//         <Route exact path="/videos">
//             <AllVideos />
//         </Route>
//         <Route exact path="/news">
//             <AllNews />
//         </Route>
//         <Route exact path="/news/:id">
//             <SingleNews />
//         </Route>
//         <Footer />
//         <CopyWrite />
//     </div>
// </Switch>;

//**************** */
//  <div className="AppContainer">
//      <Route exact path="/admin">
//          {user.id ? <Dash user={user} /> : <Login />}
//      </Route>
//      <Nav />
//      <Switch>
//          <Route exact path="/news/:id" component={SingleNews} />
//          <Route exact path="/login" component={Login} />
//          <Route exact path="/videos" component={AllVideos} />
//          <Route exact path="/news" component={AllNews} />
//          <Route exact path="/" component={Home} />
//      </Switch>
//      <Footer />
//      <CopyWrite />
//  </div>;
