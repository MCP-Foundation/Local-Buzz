create database smallStories;
​
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
name TEXT,
username TEXT,
email TEXT UNIQUE,
password TEXT,
address TEXT
)

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
title TEXT,
category TEXT,
tag TEXT,
post_body TEXT,
date_created TIMESTAMP,
location TEXT
);
​
CREATE TABLE admins (
admin_id SERIAL PRIMARY KEY,
admin_name TEXT,
email TEXT, 
password TEXT,
address TEXT
)