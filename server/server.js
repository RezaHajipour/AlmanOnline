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
    getNewsById,
    createNews,
    getLastNews,
    getHeadlines,
    getAllVideos,
    createVideo,
    getLastVideos,
} = require("./db");

const uploader = require("./uploader");
require("dotenv").config();
const { Bucket, s3upload } = require("./s3");

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

// ************REGISTER********
//*****************************

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

// ************LOGIN***********
//*****************************

app.post("/api/login", function (req, res) {
    // console.log("post request login", request.body);

    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            error: "please write username and password!",
        });
        return;
    }
    login(req.body)
        .then((user) => {
            if (!user) {
                res.status(401).json({ error: "Wrong credentials" });
                return;
            }
            req.session.user_id = user.id;
            res.json(user);
        })
        .catch((error) => {
            console.log("This error ocurred on login user", error);
            if (error.constraint == "users_email_key") {
                res.statusCode = 400;
                res.json({ error: "wrong credentials" });
                return;
            }
            res.statusCode = 500;
            res.json({ error: "wrong credentials" });
        });
});

// **********------logout------************
// ****************************************
app.post("/api/logout", function (req, res) {
    req.session = null;
    res.json({ success: true });
});
// ************USERS***********
//*****************************

app.get("/api/users/me", async function (req, res) {
    const user = await getUserById(req.session.user_id);
    if (!user) {
        res.redirect("/");
        return;
    }
    res.json(user);
});

// ************Cpanel***********
//*****************************

// ************NEWS************
//*****************************

app.get("/api/news", async (req, res) => {
    try {
        const news = await getAllNews(req.query);
        res.json(news);
    } catch (error) {
        console.log("news", error);
        res.status(500).json({
            message: "problem with getAllNews",
        });
    }
});

app.get("/api/news/:id", async (req, res) => {
    try {
        const singleNews = await getNewsById(req.params.id);
        res.json(singleNews);
    } catch (error) {
        console.log("get singleNews ", error);
        res.status(500).json({
            message: "problem with getNewsById",
        });
    }
});

app.get("/api/lastnews", async (req, res) => {
    try {
        const lastnews = await getLastNews(req.query);
        res.json(lastnews);
    } catch (error) {
        console.log("lastnews", error);
        res.status(500).json({
            message: "problem with getLastNews",
        });
    }
});

app.get("/api/headlines", async (req, res) => {
    try {
        const headlines = await getHeadlines(req.query);
        res.json(headlines);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "problem with getHeadlines",
        });
    }
});

app.post(
    "/api/news",
    uploader.single("image"), // first we upload to localhost
    s3upload, // then to S3
    async function (req, res) {
        // here you can log the request.body as well, to see what contains
        const url = `https://s3.amazonaws.com/${Bucket}/${req.file.filename}`;
        const addNews = await createNews({
            ...req.body,
            user_id: req.session.user_id,
            news_picture_url: url,
        });
        res.json(addNews);
    }
);

// ************VIDEOS**********
//*****************************

app.get("/api/videos", async (req, res) => {
    try {
        const allvideos = await getAllVideos(req.query);
        res.json(allvideos);
    } catch (error) {
        console.log("error on getting all videos", error);
        res.status(500).json({
            message: "error on getAllVideos",
        });
    }
});

app.get("/api/lastvideos", async (req, res) => {
    try {
        const lastvideos = await getLastVideos(req.query);
        res.json(lastvideos);
    } catch (error) {
        console.log("error on getLastVideos", error);
        res.status(500).json({
            message: "error on getLastVideos",
        });
    }
});

app.post("/api/videos", async function (req, res) {
    const addVideo = await createVideo({
        user_id: req.session.user_id,
        ...req.body,
    });
    res.json(addVideo);
});

//--------------------------------------------
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT, function () {
    console.log("express is listening on port 3001.");
});
