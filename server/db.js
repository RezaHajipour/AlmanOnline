const spicedPg = require("spiced-pg");
const {
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
} = require("../secrets.json");

const db = spicedPg(
    `postgres:${DATABASE_USER}:${DATABASE_PASSWORD}@localhost:5432/${DATABASE_NAME}`
);
console.log(`database ${db} conneted to: ${DATABASE_NAME}`);
const bcrypt = require("bcryptjs");
//GETING  HASH
const hash = (password) => {
    return bcrypt.genSalt().then((salt) => {
        return bcrypt.hash(password, salt);
    });
};
// **********************------REGISTER------*****************************
function createUser({ first_name, last_name, email, password }) {
    return hash(password).then((password_hash) => {
        return db
            .query(
                `INSERT INTO users (first_name, last_name, email, password_hash)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
                [first_name, last_name, email, password_hash]
            )
            .then((result) => result.rows[0]);
    });
}
// **********************------LOGIN------********************************
function getUserByEmail(email) {
    return db
        .query("SELECT * FROM users WHERE email= $1", [email])
        .then((result) => result.rows[0]);
}

function login({ email, password }) {
    return getUserByEmail(email).then((foundUser) => {
        if (!foundUser) {
            return null;
        }
        return bcrypt
            .compare(password, foundUser.password_hash)
            .then((match) => {
                if (match) {
                    return foundUser;
                }
                return null;
            });
    });
}
// **********************------USERS------********************************
function getUserById(id) {
    return db
        .query("SELECT * FROM users WHERE id= $1", [id])
        .then((result) => result.rows[0]);
}

// **********************------NEWS------********************************
function getAllNews() {
    return db
        .query("SELECT * FROM news  ORDER BY id DESC")
        .then((result) => result.rows);
}

function getNewsById(id) {
    return db
        .query(`SELECT * FROM news WHERE id= $1`, [id])
        .then((result) => result.rows[0]);
}
function getLastNews({ limit = 1 }) {
    return db
        .query(`SELECT * FROM news ORDER BY id DESC LIMIT $1`, [limit])
        .then(({ rows }) => rows);
}

function getHeadlines({ limit = 6 }) {
    return db
        .query(`SELECT * FROM news ORDER BY id DESC LIMIT $1`, [limit])
        .then(({ rows }) => rows);
}
function createNews({
    user_id,
    title,
    description,
    category,
    location,
    news_picture_url,
}) {
    return db
        .query(
            `INSERT INTO news ( user_id, title, description, category, location,  news_picture_url)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
            [user_id, title, description, category, location, news_picture_url]
        )
        .then((result) => result.rows[0]);
}

function updateNewsByUserId({
    title,
    description,
    category,
    location,
    news_picture_url,
    user_id,
}) {
    return db
        .query(
            `UPDATE news SET title = $1 , description = $2 , category= $3 , location = $4, news_picture_url = $5 
        WHERE user_id = $6
        RETURNING *`,
            [title, description, category, location, news_picture_url, user_id]
        )
        .then((result) => result.rows[0]);
}

// **********************------VIDEOS------********************************
function getAllVideos() {
    return db
        .query("SELECT * FROM videos  ORDER BY id DESC")
        .then((result) => result.rows);
}

function getLastVideos({ limit = 4 }) {
    return db
        .query(`SELECT * FROM videos ORDER BY id DESC LIMIT $1`, [limit])
        .then(({ rows }) => rows);
}

function createVideo({
    user_id,
    title,
    description,
    category,
    location,
    video_url,
}) {
    return db
        .query(
            `INSERT INTO videos ( user_id, title, description, category, location,  video_url)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
            [user_id, title, description, category, location, video_url]
        )
        .then((result) => result.rows[0]);
}

// **********************------END------********************************

module.exports = {
    createUser,
    login,
    getUserById,
    getAllNews,
    getNewsById,
    createNews,
    updateNewsByUserId,
    getLastNews,
    getHeadlines,
    getAllVideos,
    createVideo,
    getLastVideos,
};
