
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
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','second news headline', 'this is description for second news with frau Kreuzberg', 'culture', 'hamburg', 'https://uktie.eu/wp-content/uploads/2017/01/358588-news-images.jpg');
INSERT INTO news (user_id, title, description, category, location, news_picture_url) VALUES ('1','Monkeypox: After the first human-to-dog case, are pets at risk of getting the virus from owners?', 'Monkeypox: After the first human-to-dog case, are pets at risk of getting the virus from owners?', 'social', 'hannover', 'https://static.euronews.com/articles/stories/06/94/71/20/1100x619_cmsv2_d394f6ac-f7fd-599d-9d20-659b486655cd-6947120.jpg');


INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('1','video title1', 'video  description 1', 'politics', 'berlin', 'https://www.youtube.com/watch?v=vbQ-WDVqOcA');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('2','video title2', 'video  description 2', 'culture', 'hamburg', 'https://www.youtube.com/watch?v=nquPZ1G57R0');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('3','video title3', 'video  description 3', 'culture', 'bonn', 'https://www.youtube.com/watch?v=ikUphPdKZnA');
INSERT INTO videos (user_id,title, description, category, location, video_url) VALUES ('3','video title4', 'video  description 4', 'cinema', 'frankfurt', 'https://www.youtube.com/watch?v=RiU9VdYkvMQ');


curl -i -X POST http://localhost:3000/api/users \
   -H 'Content-Type: application/json' \
   -d '{"first_name":"yo","last_name":"yo", "email":"yo@yo.com", "password":"yo"}'

   curl -i -X POST http://localhost:3000/api/users \
   -H 'Content-Type: application/json' \
   -d '{"first_name":"yo","last_name":"yo", "email":"yo@yo.com", "password":"yo"}'