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

function getAllNews() {
    return db.query("SELECT * FROM news").then((result) => result.rows);
}
module.exports = {
    getAllNews,
};
