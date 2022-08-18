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

app.get("/api/news/:id", (req, res) => {
    getNewsById(req.params.image_id)
        .then((image) => {
            res.json(image);
        })
        .catch((error) => {
            res.status(500).json({ message: "error fetching news", error });
        });
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
app.post("/api/addnews", async function (req, res) {
    // console.log("req session user id", req.session.user_id);
    const addNews = await createNews({
        user_id: req.session.user_id,
        ...req.body,
    });
    res.json(addNews);
});

app.post("/upload", uploader.single("singleImage"), async function (req, res) {
    console.log("req.file", req.file);
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

app.get("upload", (req, res) => {
    console.log("getting image");
    res.send();
});
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

app.listen(process.env.PORT || 3001, function () {
    console.log("express is listening on port 3001.");
});
