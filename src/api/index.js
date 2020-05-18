const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router.js');
const port = 8080;
const userController = require('./controllers/users');
const postController = require('./controllers/posts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/posts', (req, res) => postController.getAllPosts);

app.post('/register', userController.register);

app.listen(port, () => console.log(`API Server is running on ${port}`))