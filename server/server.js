const express = require("express");
const app = express();

const compression = require("compression");
const path = require("path");
const { getAllNews } = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("express is listening on port 3001.");
});
