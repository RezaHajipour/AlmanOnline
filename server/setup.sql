
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

CREATE TABLE videos (
    id             SERIAL PRIMARY KEY,
    user_id       INT REFERENCES users(id) NOT NULL,
    title         VARCHAR(255) NOT NULL,
    description text,
    category      VARCHAR(255) NOT NULL,
    location      VARCHAR(255) NOT NULL,
    video_url text not null,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO users (first_name,last_name, email, password_hash, profile_picture_url) VALUES ('yo','yo', 'yo@mail.com', '123',  'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');

INSERT INTO news (user_id,title, description, category, location, news_picture_url) VALUES ('1','headline', 'this is description', 'politics', 'berlin', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','second news headline', 'this is description for second news', 'culture', 'hamburg', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','3rd news title this title is a little bit longer than usual', 'description for 3rd news this description is a little bit longer than usual', 'social', 'hannover', 'https://media0.faz.net/ppmedia/aktuell/1668655690/1.7921370/format_top1_breit/im-oktober-2019-verfolgten.jpg');


INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('1','video title1', 'video  description 1', 'politics', 'berlin', 'https://www.youtube.com/watch?v=vbQ-WDVqOcA');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('2','video title2', 'video  description 2', 'culture', 'hamburg', 'https://www.youtube.com/watch?v=nquPZ1G57R0');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('3','video title3', 'video  description 3', 'culture', 'bonn', 'https://www.youtube.com/watch?v=ikUphPdKZnA');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('3','video title4', 'video  description 4', 'cinema', 'frankfurt', 'https://www.youtube.com/watch?v=RiU9VdYkvMQ');


