
DROP TABLE IF EXISTS news;

CREATE TABLE news (
    id            SERIAL PRIMARY KEY,
    title         VARCHAR(255) NOT NULL,
    description text,
    category      VARCHAR(255) NOT NULL,
    location      VARCHAR(255) NOT NULL,
    news_picture_url VARCHAR,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO news (title, description, category, location, news_picture_url) VALUES ('headline', 'this is description', 'politics', 'berlin', 'www.google.com');
-- INSERT INTO news (title, description, category, location, news_picture_url) VALUES ('second news headline', 'this is description for second news', 'culture', 'hamburg', 'www.rezahajipour.com');