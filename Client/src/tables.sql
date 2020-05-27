create database smallStories;
​
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name VARCHAR,
avatar TEXT,
username VARCHAR UNIQUE NOT NULL,
bio TEXT,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
address TEXT
);

CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
title TEXT NOT NULL,
category TEXT NOT NULL,
tag TEXT,
post_body TEXT NOT NULL,
date_created TIMESTAMP,
location TEXT,
likes INT DEFAULT 0
);
​
CREATE TABLE admins (
admin_id SERIAL PRIMARY KEY,
admin_name TEXT,
email TEXT, 
password TEXT,
address TEXT
);

CREATE TABLE comments (
comment_id SERIAL PRIMARY KEY,
comment VARCHAR(255),
author VARCHAR REFERENCES users(username),
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES posts(post_id),
date_created TIMESTAMP,
likes INT DEFAULT 0
);

CREATE TABLE likes(
likes_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES posts(post_id)
);