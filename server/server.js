const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const cookieSession = require("cookie-session");
const {
    createUser,
    login,
    getUserById,
    getAllNews,
    createNews,
    // updateNewsByUserId,
} = require("./db");
const uploader = require("./uploader");

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14,
        sameSite: true,
    })
);
// **********************------REGISTER------*****************************
app.post("/api/users", function (req, res) {
    // console.log(req.body);
    createUser(req.body)
        .then((user) => {
            req.session.user_id = user.id;
            res.json(user);
        })
        .catch((error) => {
            console.log("post api users", error);
            if (error.constraint == "users_email_key") {
                res.statusCode = 400;
                res.json({ error: "email duplicated" });
                return;
            }
            res.statusCode = 500;
            res.json({ error: "generic error" });
        });
});
// **********************------LOGIN------********************************
app.post("/api/login", function (req, res) {
    // console.log("loging request body", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        res.statusCode = 401;
        res.render("login", {
            title: "Login",
            error: "please write your email and password",
        });
        return;
    }
    login(req.body)
        .then((user) => {
            req.session.user_id = user.id;
            res.json(user);
        })
        .catch((error) => {
            console.log("login post:", error);
            if (error.constraint == "users_email_key") {
                res.statusCode = 400;
                res.json({ error: "wrong credentials" });
                return;
            }
            res.statusCode = 500;
            res.json({ error: "wrong credentials" });
        });
});
// **********************------USERS------********************************
app.get("/api/users/me", async function (req, res) {
    const user = await getUserById(req.session.user_id);
    if (!user) {
        res.redirect("/");
        return;
    }
    res.json(user);
});
// **********************------NEWS------********************************
app.get("/api/news", async (req, res) => {
    try {
        const news = await getAllNews(req.query);
        res.json(news);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "problem with getAllNews",
        });
    }
});

app.post("/api/news", async function (req, res) {
    console.log("req session user id", req.session.user_id);
    const addNews = await createNews({
        user_id: req.session.user_id,
        ...req.body,
    });
    res.json({ addNews });
});

app.post("/upload", uploader.single("singleNewsImage"), function (req, res) {
    // If nothing went wrong the file is already in the uploads directory
    if (req.file) {
        res.json({
            success: true,
        });
    } else {
        res.json({
            success: false,
        });
    }
});
// app.put("/api/users/me/addnews", async function (req, res) {
//     const news = await updateNewsByUserId({
//         user_id: req.session.user_id,
//         ...req.body,
//     });
//     if (!news) {
//         res.json(null);
//         return;
//     }
//     res.json(news);
// });
//--------------------------------------------
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("express is listening on port 3001.");
});
