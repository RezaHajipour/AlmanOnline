import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLayout from "../Layout/AdminLayout";
import UserLayout from "../Layout/UserLayout";
import PageNotFound from "./PageNotFound";

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
            <Routes>
                <Route path="/admin/*" element={<AdminLayout user={user} />} />
                <Route path="/*" element={<UserLayout />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default App;

// <BrowserRouter>
//             <Switch>
//                 <Route exact path="/admin">
//                     {user.id ? <Admin user={user} /> : <Login />}
//                 </Route>
//                 <Route exact path="/admin/news">
//                     {user.id ? <AddNews user={user} /> : <Login />}
//                 </Route>
///----------------------------

// <Route exact path="/admin">
//                     {user.id ? <Admin user={user} /> : <Login />}
//                 </Route>
//                 <Route exact path="/admin/users">
//                     {user.id ? <Users user={user} /> : <Login />}
//                 </Route>
//                 <Route exact path="/admin/news">
//                     {user.id ? <AddNews user={user} /> : <Login />}
//                 </Route>
//                 <Route exact path="/admin/education">
//                     {user.id ? <Education user={user} /> : <Login />}
//                 </Route>
//                 <Route exact path="/admin/immigration">
//                     {user.id ? <Immigration user={user} /> : <Login />}
//                 </Route>
