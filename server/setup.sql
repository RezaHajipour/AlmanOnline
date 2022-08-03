
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id                  SERIAL PRIMARY KEY,
    first_name          VARCHAR(255) NOT NULL,
    last_name           VARCHAR(255) NOT NULL,
    email               VARCHAR(50) NOT NULL UNIQUE,
    password_hash       VARCHAR NOT NULL,
    profile_picture_url VARCHAR,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE news (
    id             SERIAL PRIMARY KEY,
    user_id       INT REFERENCES users(id) NOT NULL,
    title         VARCHAR(255) NOT NULL,
    description text,
    category      VARCHAR(255) NOT NULL,
    location      VARCHAR(255) NOT NULL,
    news_picture_url VARCHAR,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO users (first_name,last_name, email, password_hash, profile_picture_url) VALUES ('yo','yo', 'yo@mail.com', '123',  'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');

INSERT INTO news (user_id,title, description, category, location, news_picture_url) VALUES ('1','headline', 'this is description', 'politics', 'berlin', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','second news headline', 'this is description for second news', 'culture', 'hamburg', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','3rd news title this title is a little bit longer than usual', 'description for 3rd news this description is a little bit longer than usual', 'social', 'hannover', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id,title, description, category, location, news_picture_url) VALUES ('1','4th news headline is this one', 'this is description for fourth news', 'economics', 'bonn', 'data:image/jpeg;base64,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');